
import React from 'react';
import FooterWithCollapsibleLinks from '../FooterWithCollapsibleLinks';

interface BotoxPageFooterProps {
  handleLinkClick: () => void;
}

const BotoxPageFooter: React.FC<BotoxPageFooterProps> = ({ handleLinkClick }) => {
  return <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />;
};

export default BotoxPageFooter;
