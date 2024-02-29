import React from 'react';
import img4 from "../../../public/images/products/s11.jpg";
import img2 from '../../../public/images/backgrounds/1.svg'
import Image from "next/image";
import { Box, Typography } from '@mui/material';

interface AffordabilityRankingProp {
  rank: number;
  description: string;
}

const AffordabilityRankingImageWithTextMUI: React.FC<AffordabilityRankingProp> = ({ rank, description }) => (
  <div
    style={{
      position: 'absolute',
      width: '290px',
      height: '200px',
    }}
  >
    <Image
      alt='rank'
      src={img2}
      layout="fill"
      objectFit="cover"
    />
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily:'Montserrat',
        fontStyle:'normal',
      }}
    >
      {rank}th
    </div>

    <div
      style={{
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translate(-40%, -20%)',
        color: 'black',
        fontSize: '15px',
        fontWeight: '400',
        fontFamily:'Montserrat',
        fontStyle: 'normal',
      }}
    >
      {description}
    </div>
  </div>

  
);

export default AffordabilityRankingImageWithTextMUI;