<h1 align="center">Elektronowa Masakra</h1>
<h4 align="center">
  <a href="https://elektronowa.xyz">Live</a> |
  <a href="#deploy">Docs</a>
</h4>
<h3 align="center">Minimalistic buisness site for <code>elektronowa.xyz</code> Minecraft server</h3>

## About
It's buisness project for Minecraft server `elektronowa.xyz` with **shop** (and payment proccess).
- 🛠️&nbsp;Built on top of **Next** and Typescript
- 📱&nbsp;Responsive and **mobile-first**
- ✅&nbsp;**A11y ready**
- 🎨&nbsp;**Tailwind** and shadcn/ui for styling
- 🌀&nbsp;**motion.dev** *(aka. framer-motion)* and **tailwindcss-motion** for animations (optimized for 60fps) 
- 📄&nbsp;MDX page generation
<br />
<div align="center">
<figure align="center">
  
![Desktop Mockup](/public/repo/desktop.png)
<figcaption>Mockup</figcaption>
</figure>
</div>

# Deploy
1. Copy project and install all dependencies. Project is crafted for Node 20.18.0 and Next 14.2.20
```bash
git clone https://github.com/Mopsior/elektronowa-masakra && cd elektronowa-masakra && npm i
```
2. Fill `.env` file

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | API url, starting with `https://`, without `/` at end
| `NEXT_PUBLIC_DISCORD_INVITE` | Discord server invite |
| `NEXT_PUBLIC_DOMAIN` | Page url, starting with `https://` |

3. Update [`@/app/regulamin/page.mdx`](https://github.com/mopsior/elektronowa-masakra/blob/main/app/regulamin/page.mdx) with your content

> [!WARNING]
> After every update in `/regulamin`, you need to rebuild application

4. Build and run
```bash
npm run build &&
npm run start
```
