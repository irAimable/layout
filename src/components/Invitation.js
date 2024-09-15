// pages/index.js (ou le fichier où vous souhaitez afficher le défilement horizontal)

import React from 'react';
import { LoremIpsum } from "lorem-ipsum";

const Invitation = () => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      });
      
      const generatedText = lorem.generateParagraphs(10);

      return (
        <div className="vertical-scroll">
          <p>{generatedText}</p>
        </div>
      );
    };


export default Invitation;
