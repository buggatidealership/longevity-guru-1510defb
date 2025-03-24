
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  content: string[];
  link: string;
  imageUrl?: string;
  date?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, content, link, imageUrl, date }) => {
  // Default fallback image if none is provided or if the provided one fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80";
  
  const [imgSrc, setImgSrc] = React.useState(imageUrl || fallbackImage);
  
  // Handle image load error by using the fallback
  const handleImageError = () => {
    setImgSrc(fallbackImage);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-gray-200">
      <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-lg bg-gray-100">
        <img 
          src={imgSrc} 
          alt={`Preview image for "${title}" article`} 
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={handleImageError}
          loading="lazy"
          width={600}
          height={338}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
        {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
      </CardHeader>
      <CardContent className="flex-grow">
        {content.map((paragraph, index) => (
          <p key={index} className={`text-muted-foreground ${index > 0 ? 'mt-2' : ''} line-clamp-3`}>
            {paragraph}
          </p>
        ))}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full justify-between">
          <Link to={link}>
            Read Article <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
