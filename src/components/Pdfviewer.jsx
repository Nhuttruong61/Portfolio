import { Document, Page } from 'react-pdf';

import resumePDF from '../assets/cv/resume.pdf';

function Pdfviewer() {
return (
<div>
<Document file={resumePDF}>
<Page pageNumber={1} />
</Document>
</div>
);
}

export default Pdfviewer;