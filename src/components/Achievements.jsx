import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import fitLogo from '../assets/fit.png';

export default function Achievements() {
    return (
        <div id='achievements'>
            <h2 className="title">Achievements</h2>
            <Box sx={{p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Card sx={{display: 'flex', marginTop: '1em', width: 500}}>
                    <CardMedia 
                        component='img'
                        image='https://pusatprestasinasional.kemdikbud.go.id/uploads/event/mln97DL3c4QlAyKLnP7yxJcQmndDl9xSm5wj6qbF.png'
                        sx={{width: 151, padding: 1}}
                    />
                    <CardContent sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                            2nd Place KKCTBN 2023, ATSV Category
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{display: 'flex', marginTop: '1em',  width: 500}}>
                    <CardMedia 
                        component='img'
                        image={fitLogo}
                        sx={{width: 151, padding: .5}}
                    />
                    <CardContent sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                            3rd Place FIT Competition 2024, Web Dev Category
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}