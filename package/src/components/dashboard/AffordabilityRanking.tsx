import React from 'react';
import img4 from "../../../public/images/products/s11.jpg";
import img2 from '../../../public/images/products/rank.png'
import Image from "next/image";
import { Box, Typography } from '@mui/material';

interface AffordabilityRankingProp {
  rank: number;
  description: string;
}

const AffordabilityRankingImageWithTextMUI: React.FC<AffordabilityRankingProp> = ({ rank, description }) => (
  <div
    style={{
      position: 'relative',
      width: '200px',
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
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        fontSize: '25px',
        fontWeight: 'bold',
        fontFamily:'adamina',
      }}
    >
      {rank}th
    </div>

    <div
      style={{
        position: 'relative',
        top: '100%',
        left: '50%',
        transform: 'translate(-40%, -20%)',
        color: 'black',
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily:'adamina',
      }}
    >
      {description}
    </div>
  </div>

  
);

export default AffordabilityRankingImageWithTextMUI;