import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function FakeLanding ({canvasLoaded, screenSize}) {
    const iconDim = {sm: 68.77, xs: 51.63};
    return (
        <Box sx = {{display: canvasLoaded ? "none" : "flex"}}>
            <Box sx = {{zIndex: 1001, position: "absolute", pt: 1}}>
                <Box sx = {{
                    display: {sm: 'flex', xs: 'none'}, 
                    gap: 1, 
                    p: 2,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Skeleton variant="circular" width={46.84} height={46.84} />
                    <Skeleton variant="rounded" width={65.63} height={43.5}  />
                    <Skeleton variant="rounded" width={64} height={43.5}  />
                    <Skeleton variant="rounded" width={64} height={43.5} />
                    <Skeleton variant="rounded" width={65.58} height={43.5}  />
                </Box>
                <Box sx = {{p: 2}}>
                    <Skeleton variant = "rounded" sx = {{width: 46.84, height: 46.84, display: {sm: "none", xs: "block"}}}/>
                </Box>
            </Box>

            <Box sx = {{
                zIndex: 1000, 
                position: "absolute",
                overflowY: "scroll",
                display: "flex", 
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: 'space-between',
                flexDirection: "column"
            }}>
                <Box>
                    <Box sx = {{
                        display: 'flex', 
                        flexDirection: "column", 
                        alignItems: 'flex-start',
                        position: "absolute",
                        left: "50%",
                        top: "41.5%",
                        transform: "translate(-50%, -50%)",
                        gap: 4
                    }}>
                        <Skeleton variant="rounded" sx = {{width: {sm: 211.64, xs: 172.91}, height: {sm: 84, xs: 66}}}  />
                        <Skeleton variant="rounded" sx = {{width: {sm: 497.13, xs: 315.78}, height: {sm: 100, xs: 84}}}  />
                    </Box>
                </Box>

                <Box sx = {{pb: 10, pt: 2}}>
                    <Box sx = {{
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyCenter: "center", 
                        gap: {xs: 6, sm: 8},
                        pt: 1
                    }}>
                        <Skeleton variant="circular" sx = {{width: iconDim, height: iconDim}}/>
                        <Skeleton variant="rounded" sx = {{width: iconDim, height: iconDim}}  />
                        <Skeleton variant="rounded" sx = {{width: iconDim, height: iconDim}}  />
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}
export default FakeLanding;