import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import ImageTool from "@editorjs/image";
import Paragraph from "@editorjs/paragraph";
import ColorPlugin from "editorjs-text-color-plugin";
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'

const customTools = {
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
      icon: 'A',
      customPicker: true, // add a button to allow selecting any colour
    },
  },
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      defaultColor: "#FFBF00",
      type: "marker",
      icon: `B`,
      customPicker: true, // add a button to allow selecting any colour
    },
  },
  anyTuneName: {
    class:AlignmentTuneTool,
    config:{
      default: "left",
      blocks: {
        header: 'left',
        list: 'left',
        image: 'center'
      }
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ['anyTuneName'],
  },
  embed: Embed,

  image: {
    class: ImageTool,
    tunes: ['anyTuneName'],
    config: {
      uploader: {
        /**
         * Upload file to the server and return an uploaded image data
         * @param {File} file - file selected from the device or pasted by drag-n-drop
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByFile(file){
          // your own uploading logic here
          console.log(file, "file of the uploader")
          // return MyAjax.upload(file).then(() => {
          //   return {
          //     success: 1,
          //     file: {
          //       url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
          //       // any other image data you want to store, such as width, height, color, extension, etc
          //     }
          //   };
          // });
        },

        /**
         * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
         * @param {string} url - pasted image URL
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByUrl(url){
          console.log(url, "url of the file")
          // your ajax request for uploading
          // return MyAjax.upload(file).then(() => {
          //   return {
          //     success: 1,
          //     file: {
          //       url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
          //       // any other image data you want to store, such as width, height, color, extension, etc
          //     }
          //   }
          // })
        }
      }
    },
  },
  // image: {
  //   class: ImageTool,
  //   inlineToolbar: true,
  //   config: {
  //     /**
  //      * Custom uploader
  //      */
  //     uploader: {
  //       /**
  //        * Upload file to the server and return an uploaded image data
  //        * @param {File} file - file selected from the device or pasted by drag-n-drop
  //        * @return {Promise.<{success, file: {url}}>}
  //        */
  //       uploadByFile(file){
  //         return Promise.resolve({success: 1, file: {url: "https://fastly.picsum.photos/id/117/1544/1024.jpg?hmac=xFWtVUv1xkFVVidifC3drKerU_k_za4w28fv5etvxRc"}})
  //         // your own uploading logic here
  //         // return MyAjax.upload(file).then(() => {
  //         //   return {
  //         //     success: 1,
  //         //     file: {
  //         //       url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
  //         //       // any other image data you want to store, such as width, height, color, extension, etc
  //         //     }
  //         //   };
  //         // });
  //       },

  //       /**
  //        * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
  //        * @param {string} url - pasted image URL
  //        * @return {Promise.<{success, file: {url}}>}
  //        */
  //       uploadByUrl(url){
  //         // your ajax request for uploading
  //         return Promise.resolve({})

  //         // return MyAjax.upload(file).then(() => {
  //         //   return {
  //         //     success: 1,
  //         //     file: {
  //         //       url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
  //         //       // any other image data you want to store, such as width, height, color, extension, etc
  //         //     }
  //         //   }
  //         // })
  //       }
  //     }
  //   }
  // },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    tunes: ['anyTuneName'],
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Quote",
      captionPlaceholder: "Quote`s author",
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
};

export default customTools;