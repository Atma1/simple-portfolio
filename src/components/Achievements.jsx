import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export default function Achievements() {
    return (
        <div id='achievements'>
            <h2 className="title">Achievements</h2>
            <Box>
                <Card sx={{display: 'flex', marginTop: '1em'}}>
                    <CardMedia 
                        component='img'
                        image='https://pusatprestasinasional.kemdikbud.go.id/uploads/event/mln97DL3c4QlAyKLnP7yxJcQmndDl9xSm5wj6qbF.png'
                        sx={{width: 151}}
                    />
                    <CardContent sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                            2nd Place KKCTBN 2023, ATSV Category
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{display: 'flex', marginTop: '1em'}}>
                    <CardMedia 
                        component='img'
                        image='https://pusatprestasinasional.kemdikbud.go.id/uploads/event/mln97DL3c4QlAyKLnP7yxJcQmndDl9xSm5wj6qbF.png'
                        sx={{width: 151}}
                    />
                    <CardContent sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography>
                            2nd Place KKCTBN 2023, ATSV Category
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}