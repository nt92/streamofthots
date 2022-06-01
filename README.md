# 🌊 streamofthots

## ☀️ Overview

This project is essentially my attempt to kill a few birds with one stone.

For starters, my writing output was (self-imposed) limited by the fact that I find it difficult to publish unless things are deeply polished — for the more ephemeral stuff, it felt weird posting on Twitter (even though that's probably what it's for). In the past I've experimented with lightform [`/notes`](https://nikhilthota.com/notes/) but that didn't really work either. Thus, I decided to handroll something for myself that fits exactly what I want to do.

Second, I wanted to build a full-stack web app end-to-end 

*This stream was inspired deeply in functionality and design by [Linus](https://stream.thesephist.com/). I essentially rewrote his elegant implementation written in `Oak` into a `React` webapp with a lightweight `Node.js` backend and a `SQLite` database.*

| Dark Mode | Light Mode |
| --------- | ---------- |
| ![image](https://user-images.githubusercontent.com/10099203/171517035-d6335290-4249-4a68-aa29-663af7be127a.png) | ![image](https://user-images.githubusercontent.com/10099203/171517043-c79f313f-84d6-49a7-bba9-78c15a551a40.png) | 

One cool thing about this website is that I built it while doing [Recurse Center](https://www.recurse.com/scout/click?t=24d484b9881fe66b2727c8388f07bba9), and used it mid-way to record my updates & insights as I was learning.
* [Update 1](https://streamofthots.com/updates/1652846407)
* [Update 2](https://streamofthots.com/updates/1653092647)

## 🛠 Features

This site features a few cool things:
* Dark / Light mode using local storage
* Full-text searching using good ol' `LIKE "%string%"` in my database
* Local route that's password protected on the `NGINX` side for me to add to the stream
* You can click into individual stream updates and share them
* Full markdown support (ty React libraries)

### Future

There are quite a few things I can add to this site to make it a bit more rich & fun
* The ability for someone else to have their own account and post, creating a "hive mind" of sorts
* A dope wave `.svg` animation — I tried to do this for like 2 hours but couldn't figure out how to get it to stick to the bottom of the stream correctly
* Highlighting when you search a term
