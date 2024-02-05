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

  generateHMAC(computerMove) {
    this._hmac = crypto.createHmac("sha256", this._key).update(computerMove).digest("hex");
  }

  get hmac() {
    return this._hmac;
  }

  set hmac(value) {
    this.hmac = value;
  }

  get key() {
    return this._key;
  }

  set key(value) {
    this._key = value;
  }
}
