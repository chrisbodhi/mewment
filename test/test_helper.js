export const catProfile = {
  name: 'Qwerty',
  age: 1,
  sex: 'Spayed',
  color: 'Black',
  about: 'Stinky',
  avatar: 'http://bit.ly/1rdk9Us',
  public: {
    firebaseKey1: 'https://placekitten.com/200/300',
    firebaseKey2: 'https://placekitten.com/300/300',
    firebaseKey3: 'https://placekitten.com/400/300',
  },
  private: {}
};

export const defaultStatus = {
  photoIsUploading: false,
  photoUploadSuccess: false,
  photoUploadError: false,
  fetchingCats: false,
  fetchedCatsSuccess: false,
  fetchedCatsError: false,
  showUploadForm: false,
  catIndexForUpload: null
};
