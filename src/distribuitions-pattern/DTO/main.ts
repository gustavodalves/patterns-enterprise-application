import { AlbumDTO } from "./album.dto";
import { Album } from "./models/album";
import { Artist } from "./models/artist";

const albumDTO = new AlbumDTO(
    'Travis Scott',
    'ASTROWORLD'
)

const album = new Album(
    albumDTO.title,
    new Artist(
        albumDTO.artist
    )
)
