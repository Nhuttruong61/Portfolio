import React from 'react';
import resumePDF from '../assets/cv/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">My Resume</h1>
      <embed src={resumePDF} type="application/pdf" width="60%" height="800px" />
      <a
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
        Download PDF
      </a>
    </div>
  );
}
export default Resume;