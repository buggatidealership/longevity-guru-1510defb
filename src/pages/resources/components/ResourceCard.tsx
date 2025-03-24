
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
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
      {imageUrl && (
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
      </CardHeader>
      <CardContent className="flex-grow">
        {content.map((paragraph, index) => (
          <p key={index} className={`text-muted-foreground ${index > 0 ? 'mt-2' : ''}`}>
            {paragraph}
          </p>
        ))}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full justify-between">
          <Link to={link}>
            Read Article <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
