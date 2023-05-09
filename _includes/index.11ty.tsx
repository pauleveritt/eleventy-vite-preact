// noinspection ES6UnusedImports
import h from "vhtml";

export const data = {
  title: "Eleventy 11ty.js Extensions",
};

interface Context {
  log(message: string): void;
}

interface Data {
  readonly title: string;
}

export function render(this: Context, { title }: Data) {
//   this.log(title);
//   return (
//     <html lang="en">
//       <head>
//         <title>{title}</title>
//       </head>
//       <body>
//         <main className="container">
//           <h1>{title}</h1>
//           <p>
//             Example repo to show the value of{" "}
//             <a href="https://github.com/11ty/eleventy/issues/2248">
//               11ty/eleventy#2248
//             </a>
//             .
//           </p>
//         </main>
//       </body>
//     </html>
//   );
  return <div>Hello</div>
}
