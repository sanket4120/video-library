const isInTheList = (list, id) => list?.some((element) => element._id === id);

const getPlaylistById = (playlistId, playlists) => {
  return playlists.find(({ _id }) => _id === playlistId);
};

const isPresentInPlaylists = (playlists, videoId) => {
  if (playlists?.length) {
    return playlists.find((playlist) => isInTheList(playlist.videos, videoId));
  }
};

export { isInTheList, getPlaylistById, isPresentInPlaylists };
