
import React from 'react';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';

interface ResourcePageFooterProps {
  handleLinkClick?: () => void;
}

const ResourcePageFooter: React.FC<ResourcePageFooterProps> = ({ handleLinkClick }) => {
  return <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />;
};

export default ResourcePageFooter;
