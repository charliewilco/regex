// import tlds from "tlds";

interface IRegexOptions {
  readonly exact?: boolean;
  readonly strict?: boolean;
}

// So You Think You Need a Regex
// SYTYNAR

// export class URLRegex extends RegExp {
//   constructor(options?: IRegexOptions) {
//     super();
//   }
// }

// export class EmailRegex extends RegExp {
//   constructor(options?: IRegexOptions) {
//     super();
//   }
// }

// export class UUIDRegex extends RegExp {
//   constructor(options?: IRegexOptions) {
//     super();
//   }
// }

export class EthereumAddressRegex extends RegExp {
  constructor(options?: IRegexOptions) {
    super(/0x[a-fA-F0-9]{40}/);
  }
}

// export class JSONAddressRegex extends RegExp {
//   constructor(options?: IRegexOptions) {
//     /**
//      *   var my_JSON_object = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
//          text.replace(/"(\\.|[^"\\])*"/g, ''))) &&
//      eval('(' + text + ')');
//      */
//     super();
//   }
// }

export class HTMLRegex extends RegExp {
  constructor(options?: IRegexOptions) {
    super(/<\/?(?:p|a|b|img)(?: [A-Za-z0-9]+=["'`].+["'`])*(?: \/)?>/);
  }
}

export class USPhoneNumberRegex extends RegExp {
  constructor(options?: IRegexOptions) {
    super(/(?:\(?\d{3})?\)?[- ]?[2-9]\d{2}[- ]?\d{4}/);
  }
}
