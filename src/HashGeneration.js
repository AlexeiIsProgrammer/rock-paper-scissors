import crypto from 'crypto'

export default class HashGeneration {
  constructor(computerMove) {
    this._hmac = "";
    this._key = "";
    this.generateKey();
    this.generateHMAC(computerMove);
    console.log("HMAC: ", this.hmac);
  }

  generateKey() {
    this._key = crypto.randomBytes(256);
  }

  generateHMAC(move) {
    this.hmac = crypto.createHmac("sha256", this._key).update(move);
    return this
  }

  get hmac() {
    return this._hmac.digest("hex");
  }

  set hmac(value) {
    this._hmac = value;
  }

  get key() {
    return this._key.toString('hex');
  }

  set key(value) {
    this._key = value;
  }
}
