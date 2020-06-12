import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';

const InfoText = ({ label, classItem, color = 'initial', display = 'initial' }) => (
  <Typography className={classItem} color={color} display={display}>
    {label}
  </Typography>
);

export default memo(InfoText);
