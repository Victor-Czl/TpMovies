//Un film
export default class Film {
  constructor(id, titre, image) {
    this._id = id;
    this._titre = titre;
    this._image = image;
  }

  get id() {
    return this._id;
  }

  get titre() {
    return this._titre;
  }

  get image() {
    return this._image;
  }
}
