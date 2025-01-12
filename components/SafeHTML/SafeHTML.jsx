import DOMPurify from 'dompurify';
import React from 'react';

const SafeHTML = ({ htmlContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent); // Sanitize the HTML

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default SafeHTML;