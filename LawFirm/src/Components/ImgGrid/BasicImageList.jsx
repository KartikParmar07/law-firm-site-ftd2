import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import gridImg1 from '../../Assets/grid-img-1.png';
import gridImg2 from '../../Assets/grid-img-2.png';
import gridImg3 from '../../Assets/grid-img-3.png';
import gridImg4 from '../../Assets/grid-img-4.png';
import gridImg5 from '../../Assets/grid-img-5.png';
import gridImg6 from '../../Assets/grid-img-6.png';
import { Typography } from '@mui/material';
import Heading3 from '../Text/Heading3';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
    return (
        <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
          <ImageList
            sx={{ width: 'auto', height: 'auto' }}
            variant="quilted"
            cols={3}
            rowHeight="auto"
            gap={30} // Add gap between images
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    {...srcset(item.img, 180, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      width: '100%',
                      padding: '8px',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="subtitle1" style={{ color: '#fff' }}>
                      <Heading3 text={item.title} />
                    </Typography>
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      );
}

const itemData = [
    {
        img: gridImg1,
        title: 'BUSINESS LAW',
        cols: 2,
      },
  {
    img: gridImg2,
    title: 'Partnership LAW',
  },
  {
    img: gridImg3,
    title: 'REAL ESTATE LAW',
  },
  {
    img: gridImg4,
    title: 'BUSINESS LAW',
    cols: 2,
  },
  {
    img: gridImg5,
    title: 'LANDLORD DISPUTES',
    cols: 2,
  },
  {
    img: gridImg6,
    title: 'ELDER ABUSE',
  },
  
];
