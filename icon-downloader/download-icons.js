import fs from "fs";
import https from "https";

const tools = [
  { name: "Vite", domain: "vite.dev" },
  { name: "React Slick", domain: "react-slick.neostack.com" },
  {
    name: "React Scroll Parallax",
    domain: "react-scroll-parallax.damnthat.tv",
  },
  { name: "React Hook Form", domain: "react-hook-form.com" },
  { name: "React", domain: "react.dev" },
  { name: "EmailJS", domain: "emailjs.com" },
  { name: "Sonner", domain: "sonner.emilkowal.ski" },
  { name: "Sweet Alert", domain: "sweetalert2.github.io" },
  { name: "React Router", domain: "reactrouter.com" },
  { name: "Lucide", domain: "lucide.dev" },
  { name: "TanStack", domain: "tanstack.com" },
];

const icons = tools.map(({ name, domain }) => ({
  name,
  url: `https://www.google.com/s2/favicons?domain=${domain}`,
}));
const dir = "./icons";
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const downloadIcon = (name, url) => {
  https
    .get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Follow redirect
        const redirectUrl = res.headers.location;
        console.log(`Redirecting ${name} to ${redirectUrl}`);
        downloadIcon(name, redirectUrl);
        return;
      }

      if (res.statusCode !== 200) {
        console.error(`Failed to download ${name}: ${res.statusCode}`);
        return;
      }

      const contentType = res.headers["content-type"];
      const extension = contentType.includes("svg") ? "svg" : "png";
      const filePath = `${dir}/${name}.${extension}`;
      const file = fs.createWriteStream(filePath);

      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`${name} icon saved.`);
      });
    })
    .on("error", (err) => {
      console.error(`Error downloading ${name}:`, err.message);
    });
};

icons.forEach(({ name, url }) => downloadIcon(name, url));
