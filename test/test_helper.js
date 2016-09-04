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
  private: {},
  wishlist: {
    toys: [
      { name: 'Mouse', link: 'http://amzn.co/mousey' },
      { name: 'Bird', link: 'http://amzn.co/birdy' }
    ],
    food: [
      { name: 'dry food', link: 'http://amzn.co/dry' },
      { name: 'canned food', link: 'http://amzn.co/canned' }
    ],
    litter: [
      { name: 'littering', link: 'http://amzn.co/litter' }
    ]
  }
};

export const defaultStatus = {
  photoIsUploading: false,
  photoUploadSuccess: false,
  photoUploadError: false,

  fetchingCats: false,
  fetchedCatsSuccess: false,
  fetchedCatsError: false,

  fetchingFollowing: false,
  fetchedFollowingSuccess: false,
  fetchedFollowingError: false,

  showUploadForm: false,
  catIndexForUpload: null
};
