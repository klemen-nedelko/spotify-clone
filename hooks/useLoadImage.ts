import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (song:Song) =>{
    const supabasClient = useSupabaseClient()

    if(!song){
        return null
    }

    const {data: imageData} = supabasClient.storage.from('images').getPublicUrl(song.image_path)

    return imageData.publicUrl
}

export default useLoadImage