import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { CabonorteLayout } from "../layout/CabonorteLayout";
import { NothingSelectedView, NoteView } from "../views";

export const CabonortePage = () => {
  return (
    <CabonorteLayout>
      
      <NothingSelectedView />
      {/*<NoteView />*/}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </CabonorteLayout>
  )
}
