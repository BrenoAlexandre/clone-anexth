import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const ErrorTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#EF5555',
    color: '#ffffff',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    border: '1px solid #dadde9',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#EF5555',
  },
}));

export default ErrorTooltip;
