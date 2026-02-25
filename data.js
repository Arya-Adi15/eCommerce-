const products = [

    { id: 1, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/y/d/h/free-s9-1077-bikini-set-sgc-sweden-original-imagrnfrwarphvs5.jpeg?q=70" },

    { id: 2, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/y/a/3/m-babay001-mysli-original-imah8yxergtuxzyt.jpeg?q=70" },

    { id: 3, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/b/t/z/free-s9-1077-bikini-set-sgc-sweden-original-imagrnfrntr8ghdj.jpeg?q=70" },

    { id: 4, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/r/u/n/free-maroon-one-piece-lingerie-ssoshhub-original-imaghxsgzgffvmj5.jpeg?q=70" },

    { id: 5, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/night-dress-nighty/i/b/o/free-7011-grey-baby-doll-life-tale-resized-2-original-imagg8ptj4zactgx.jpeg?q=70" },

    { id: 6, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/i/f/r/free-maroon-vl-cut-1077-lingerie-babydoll-ssoshhub-original-imagjg36yjyghftx.jpeg?q=70" },

    { id: 7, name: "Women Saree..", price: "2200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/v/k/-resized-2-original-imahhbygduzgqqng.jpeg?q=70" },

    { id: 8, name: "Women Saree..", price: "2500", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/e/n/free-rcrw3701-elora-unstitched-original-imahbk9sxjdhs5gk.jpeg?q=70" },

    { id: 9, name: "Women Saree..", price: "4500", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/3/f/free-bridal-red-saree-snh-export-unstitched-resized-2-original-imahbmaaqfcnkhez.jpeg?q=70" },

    { id: 10, name: "Women Saree..", price: "8200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/u/7/free-krn-sht-0063-mayak-handloom-unstitched-original-imah29jaupsmhq3m.jpeg?q=70" },

    { id: 11, name: "Women Saree..", price: "5200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sari/q/i/1/free-gkerala-kira-navy-gugaliya-unstitched-original-imahc44v9twyryfr.jpeg?q=70" },

    { id: 12, name: "Women Saree..", price: "3200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/q/e/u/free-165-artfulthreads-no-blouse-resized-2-original-imah4sv4xzrf2dxt.jpeg?q=70" },

    { id: 13, name: "Women Saree..", price: "5200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/l/o/n/free-fk-ys-p1-dholki-baby-pink-yashika-unstitched-original-imah38d7gfhgkafe.jpeg?q=70" },

    { id: 14, name: "Women Saree..", price: "4200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/1/g/free-embroidered-bollywood-cotton-linen-saree-krivity-unstitched-resized-2-original-imah9a8zy78ecxxf.jpeg?q=70" },

    { id: 15, name: "Women Saree..", price: "6200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/5/i/free-diamond-kaxafashion-unstitched-original-imahjszzuzc3wpzd.jpeg?q=70" },

    { id: 16, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/n/a/f/-resized-2-original-imaheqk7r7xzuf99.jpeg?q=70" },

    { id: 17, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/w/u/b/m-solid-wine-kaizone-original-imahjav3unpwhtbr.jpeg?q=70" },

    { id: 18, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/1/l/-original-imahjyz5h3qwbpmy.jpeg?q=70" },

    { id: 19, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/j/t/d/s-jsk-011-enterprisesjsk-original-imahjdpwgdfjb9km.jpeg?q=70" },

    { id: 20, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/f/m/k/s-nd-125-nalax-designs-original-imagryhja2hgbgvb.jpeg?q=70" },

    { id: 21, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/4/j/xl-black-dress-aarti-fashion-original-imahcph7skwzkufh.jpeg?q=70" },

    { id: 22, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/0/v/s/m-411-leoped-amorluxe-original-imahjyhrndqchcty.jpeg?q=70" },

    { id: 23, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/apparel-set/w/h/h/xxl-2142-co-ords-sijopa-original-imahg3rbbycfswvr.jpeg?q=70" },

    { id: 24, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/apparel-set/r/l/j/xl-aco-18888-co-ords-shally-bhasin-by-athena-original-imahg4ptvderabyf.jpeg?q=70" },

    { id: 25, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/apparel-set/s/v/l/s-09-green-2pcs-co-ords-ethnichub-original-imaheqqmzdfd9auh.jpeg?q=70" },

    { id: 26, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/w/q/9/xxl-d-anjani-trendz-tycoon-original-imahebbggt6sf7kn.jpeg?q=70" },

    { id: 27, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70" },

    { id: 28, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/z/u/l-ethnic-set123-glitzstyle-original-imahk77gn7nvwnfs.jpeg?q=70" },

    { id: 29, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-ethnic-set/s/d/q/l-shop-miss-96-miss-clothing-original-imahghu49fgbcagw.jpeg?q=70" },

    { id: 30, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/w/q/j/l-pinkbandej-mini-collections-original-imah4ayvy3vzmch5.jpeg?q=70" },

    { id: 31, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/n/7/xs-ps-peach-2025-pschoice-original-imahf78fk2gfgcgu.jpeg?q=70" },

    { id: 32, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/i/s/m-14775-niklav-original-imahhh27qrj8wbyx.jpeg?q=70" },

    { id: 33, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70" },

    { id: 34, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/l/g/t/l-joplvsrw4288q-wonder-weaves-original-imahexe37u6wzfhn.jpeg?q=70" },

    { id: 35, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/r/d/p/m-ugmaz001-ugmaz-original-imahgg4ynhfyqzsw.jpeg?q=70" },

    { id: 36, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/s/z/b/3xl-dvk-bbd-lng-mx-nighty-0135-dvka-creations-original-imahgv7dewyjeaqz.jpeg?q=70" },

    { id: 37, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/kbwjvrk0/night-dress-nighty/d/q/u/free-purple-robe-lingerie-printed-set-ssoshhub-original-imaft5z8a6rnz2zz.jpeg?q=70" },

    { id: 38, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/y/b/h/l-50-dg-mysli-original-imahgnzfpbcevy7u.jpeg?q=70" },

    { id: 39, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/w/7/l/34-sfh051-bl-beaon-original-imaghacpvyb3fz87.jpeg?q=70" },

    { id: 40, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/3/h/x/na-na-2-pd0940-er0625-giva-original-imahgxnqssgasdf3.jpeg?q=70" },

    { id: 41, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/r/k/e/na-na-3-pd03376-er03738-giva-original-imahkvjvmwmmxpsa.jpeg?q=70" },

    { id: 42, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/v/z/c/na-na-3-pd03205-er03452-giva-original-imahk68zcjazvwby.jpeg?q=70" },

    { id: 43, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/earring/x/z/j/na-skr56886-suk-sukkhi-original-imahgzpvq6kj7azq.jpeg?q=70" },

    { id: 44, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/1/2/d/na-na-4-ns105561-suk-4-sukkhi-original-imahf5snbzdhusgg.jpeg?q=70" },

    { id: 45, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/r/x/j/na-na-3-ns105840-studio-sukkhi-original-imagtzbzhhqmvrjm.jpeg?q=70" },

    { id: 46, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/q/y/y/na-na-3-ns105811-studio-sukkhi-original-imagtzbpv6czmyxn.jpeg?q=70" },

    { id: 47, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/earring/m/d/z/na-na-hm-er-89-1-naman-arts-original-imahjswm6ygt3kgw.jpeg?q=70" },

    { id: 48, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ring/3/h/v/-original-imahftfbdtkhaa6r.jpeg?q=70" },

    { id: 49, name: "Jewellery", price: "12,000", type: "fashion", cat: "jewellery", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/earring/a/n/s/na-sswer0664-palmonas-original-imahfkhzkh7fcdp3.jpeg?q=70" },

    { id: 50, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/a/c/g/free-half-sleeve-rk4024-komalpattu-kv-babypink-unstitch-shree-original-imah7tzgenfhgz6g.jpeg?q=70" },
    { id: 51, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/6/d/t/free-na-mango-sarathybiz-original-imahceff3zgrbjy4.jpeg?q=70" },

    { id: 52, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/l/q/j/free-short-sleeve-big-siddhi-darkblue-trivety-original-imahhyfgqsxcgpce.jpeg?q=70" },

    { id: 53, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/g/n/z/free-half-sleeve-red-samantha-lehenga-tf-trijal-fab-original-imahcfk8gzm9jm2b.jpeg?q=70" },

    { id: 54, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/a/b/p/free-full-sleeve-lengha-21-folkshwear-21-original-imahjqnsedzxa8ut.jpeg?q=70" },

    { id: 55, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/a/i/d/free-full-sleeve-simple-lehenga-white-lehenga-for-wedding-haldi-original-imah9qngzhbxqwev.jpeg?q=70" },

    { id: 56, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/h/r/w/free-half-sleeve-white-peacock-lehenga-kf-kedar-fab-original-imahf77wzjya6fem.jpeg?q=70" },

    { id: 57, name: "Women Lehenga..", price: "5000", type: "fashion", cat: "lehenga", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/n/b/a/free-half-sleeve-rk4067-sudha-kv-creammaroon-unstitch-shree-original-imah82pbjy2chn9g.jpeg?q=70" },

    { id: 58, name: "Perfume..", price: "520", type: "beauty", cat: "perfume", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/r/m/f/-original-imahekyg3u7rjqhh.jpeg?q=70" },

    { id: 59, name: "Perfume..", price: "520", type: "beauty", cat: "perfume", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/b/u/i/50-black-perfume-eau-de-toilette-the-man-company-men-original-imahkbx4dfttnkur.jpeg?q=70" },

    { id: 60, name: "Perfume..", price: "520", type: "beauty", cat: "perfume", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/x/k/e/100-honey-oud-with-honey-floral-oud-scent-edp-fragrance-eau-de-original-imahgh6zzbn79gzu.jpeg?q=70" },

    { id: 61, name: "Perfume..", price: "520", type: "beauty", cat: "perfume", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/l/1/d/50-neea-floral-perfume-50ml-long-lasting-scent-spray-party-wear-original-imahke5syrdh7ugw.jpeg?q=70" },

    { id: 62, name: "Perfume..", price: "520", type: "beauty", cat: "perfume", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-perfume/j/i/r/140-black-code-eau-de-parfum-denver-men-original-imah7s5nqfmkzhgr.jpeg?q=70" },

    { id: 63, name: "Kajal..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/x/3/s/-original-imagzbzwvvz2nktx.jpeg?q=70" },

    { id: 64, name: "Kajal..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/s/o/o/0-35-9-to-5-eyeconic-kajal-twin-pack-lasts-upto-24hrs-pack-of-2-original-imagxqbnmmc2gypk.jpeg?q=70" },

    { id: 65, name: "Kajal..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/d/h/m/0-25-kohl-of-honour-intense-kajal-sugar-cosmetics-original-imah38dfnzfezy9x.jpeg?q=70" },

    { id: 66, name: "Mascara..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/v/8/t/-original-imah6zjngp9ufp3q.jpeg?q=70" },

    { id: 67, name: "Mascara..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/c/z/o/15-0-2in1-volumizing-and-lengthening-long-lasting-mascara-mars-original-imahckyz5gmahqyc.jpeg?q=70" },

    { id: 68, name: "Mascara..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/y/o/h/5-9to9-all-eyes-on-you-volumizing-waterproof-mascara-smudgeproof-original-imahyg2jzghhgffm.jpeg?q=70" },

    { id: 69, name: "Eye Shadow..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-eye-shadow/4/4/s/30-nude-and-rose-gold-eyeshadow-palette-combo-shimmery-finish-original-imahfsfsbvdzgkgw.jpeg?q=70" },

    { id: 70, name: "Eye Shadow..", price: "1500", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/k01b8280/eye-shadow/q/u/a/8-blush-makeup-red-disk-6-colors-professional-cheek-blush-high-original-imafjsx6kjwbycvg.jpeg?q=70" },

    { id: 71, name: "Eye Shadow..", price: "1200", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-eye-shadow/4/4/s/30-nude-and-rose-gold-eyeshadow-palette-combo-shimmery-finish-original-imahfsfsbvdzgkgw.jpeg?q=70" },

    { id: 72, name: "Eye Shadow..", price: "1200", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/eye-shadow/r/s/d/18-beauty-rose-gold-remastered-edition-18-color-eyeshadow-original-imaheb8ahne7tyxm.jpeg?q=70" },

    { id: 73, name: "Eye Shadow..", price: "1200", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/l2tcfbk0/eye-shadow/l/b/m/12-eyes-on-me-10-in-1-eyeshadow-palette-nykaa-original-image32z22hzrh9d.jpeg?q=70" },

    { id: 74, name: "Eye Shadow..", price: "1200", type: "beauty", cat: "eye", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/eye-shadow/k/z/v/26-25-colors-blink-eyeshadow-palette-high-pigment-superstay-original-imahf4zwgjtjg2gy.jpeg?q=70" },

    { id: 75, name: "Hair Serum..", price: "800", type: "beauty", cat: "hair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/k/j/6/-original-imahhcustffahnnw.jpeg?q=70" },

    { id: 76, name: "Hair Serum..", price: "800", type: "beauty", cat: "hair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/u/u/u/50-hibiscus-frizz-control-serum-smoothes-frizzy-hair-13-original-imahdnwr3bgv3fbn.jpeg?q=70" },

    { id: 77, name: "Hair Serum..", price: "800", type: "beauty", cat: "hair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/r/f/1/60-foli-rich-nova-hair-serum-regaliz-original-imahkgf4wtydrks4.jpeg?q=70" },

    { id: 78, name: "Foundation..", price: "500", type: "beauty", cat: "face", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/y/6/v/-original-imahk8gyz5yeywta.jpeg?q=70" },

    { id: 79, name: "Foundation..", price: "500", type: "beauty", cat: "face", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/u/s/e/40-spf50-pa-high-coverage-foundation-tested-by-in-vivo-with-5-original-imahkjhbqd27zwwx.jpeg?q=70" },

    { id: 80, name: "Foundation..", price: "500", type: "beauty", cat: "face", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/f/1/p/-original-imagzfd4usezsz5n.jpeg?q=70" },

    { id: 81, name: "Blush..", price: "500", type: "beauty", cat: "face", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/blush/x/e/x/4-0-face-sheer-blusher-lakme-original-imahe5qydhdfcffy.jpeg?q=70" },

    { id: 82, name: "Blush..", price: "500", type: "beauty", cat: "face", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/blush/g/u/y/40-imagic-6-shade-touch-blush-palette-waterproof-long-lasting-original-imagbjdt8tyxqwrz.jpeg?q=70" },

    { id: 83, name: "Lipstick..", price: "1499", type: "beauty", cat: "lip", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/s/q/7/3-9-color-sensational-creamy-matte-lipstick-maybelline-new-york-original-imahfgcgnztae7rh.jpeg?q=70" },

    { id: 84, name: "Lipstick..", price: "1499", type: "beauty", cat: "lip", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/o/0/h/4-2-creamy-matte-long-stay-lipstick-with-murumuru-butter-and-original-imahcksgn7tspchh.jpeg?q=70" },

    { id: 85, name: "Lipstick..", price: "1499", type: "beauty", cat: "lip", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/w/h/v/-original-imahf9j7tyzkkrgc.jpeg?q=70" },

    { id: 86, name: "Lipstick..", price: "1499", type: "beauty", cat: "lip", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lip-balm/h/g/i/5-kojic-acid-ceramide-spf-50-pa-light-rosy-lip-balm-for-original-imahkf6dpfvgbu7h.jpeg?q=70" },

    { id: 87, name: "Lipstick..", price: "1499", type: "beauty", cat: "lip", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lip-balm/g/6/i/40-hydrating-peptide-lip-tint-glossy-color-for-soft-smooth-lips-original-imahjf8crhuzkvcy.jpeg?q=70" },

    { id: 88, name: "Lipstick..", price: "1499", type: "beauty", cat: "lip", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lip-stain/l/g/c/5-multi-mousse-berry-brul-e-5gm-renee-original-imaghjmjtzcnvfcg.jpeg?q=70" },

    { id: 89, name: "Beds..", price: "15999", type: "furniture", cat: "bed", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed/n/2/s/-original-imahggexzbqmyfyc.jpeg?q=70" },

    { id: 90, name: "Beds..", price: "15999", type: "furniture", cat: "bed", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed/k/y/m/queen-204-na-no-155-particle-board-no-70-ams123-bharat-lifestyle-original-imahkg9gmpbz7pyh.jpeg?q=70" },

    { id: 91, name: "Beds..", price: "15999", type: "furniture", cat: "bed", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed/l/s/n/queen-208-2-na-no-157-4-particle-board-yes-94-ws-clmcy-bs-cwf-original-imahgy6fyfh343ma.jpeg?q=70" },

    { id: 92, name: "Beds..", price: "15999", type: "furniture", cat: "bed", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed/d/r/j/-original-imahgmmqqgp9ghmx.jpeg?q=70" },

    { id: 93, name: "Sofa Sets..", price: "32,011", type: "furniture", cat: "sofa", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/k/d/f/pink-velvet-2-1-1-c-sofa-set-21-smarts-collection-pink-original-imagnrtr8cvvrrvx.jpeg?q=70" },

    { id: 94, name: "Sofa Sets..", price: "32,011", type: "furniture", cat: "sofa", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/a/a/a/85-344-0-brown-polycotton-3-1-1-182-88-0-85-34-37-18-0-emporio-original-imah8uduta6c8xbk.jpeg?q=70" },

    { id: 95, name: "Sofa Sets..", price: "32,011", type: "furniture", cat: "sofa", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/6/l/k/78-74-78-74-brown-jute-3-2-2-180-34-25-73-66-30-20-129-54-sf-original-imah6t225hb9yrn8.jpeg?q=70" },

    { id: 96, name: "Sofa Sets..", price: "32,011", type: "furniture", cat: "sofa", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/1/q/u/-original-imahkz44hvnpkemz.jpeg?q=70" },

    { id: 97, name: "Laptop Table..", price: "399", type: "furniture", cat: "laptoptable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kid-table/v/m/o/39-3-mdf-5-saloonside-black-28-original-imahhskgy7hhffvk.jpeg?q=70" },

    { id: 98, name: "Laptop Table..", price: "399", type: "furniture", cat: "laptoptable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/portable-laptop-table/x/q/i/5-pp-polypropylene-02-wooden-houseofcommon-10-brown-original-imahcg8zkkkx2wwb.jpeg?q=70" },

    { id: 99, name: "Laptop Table..", price: "399", type: "furniture", cat: "laptoptable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/portable-laptop-table/g/m/8/40-plywood-multipurpose-adjustable-height-table-with-wheels-for-original-imah9sztgf9zfgpx.jpeg?q=70" },

    { id: 101, name: "Laptop Table..", price: "399", type: "furniture", cat: "laptoptable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/portable-laptop-table/s/x/e/40-pp-polypropylene-spider143-khodal-arth-25-spiderman-original-imahgf7k4kfvhmpu.jpeg?q=70" },
    { id: 102, name: "Laptop Table..", price: "399", type: "furniture", cat: "laptoptable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kid-table/m/m/g/39-3-mdf-tble-tex-3-dnd-nx-multicolour-28-original-imahe7mkngvhfgea.jpeg?q=70" },
    { id: 103, name: "Chair..", price: "1,299", type: "furniture", cat: "chair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/b/f/u/1-wrought-iron-64-ifa-diego-black-mb-iafa-109-original-imahjf6zgj8z6zyr.jpeg?q=70" },
    { id: 104, name: "Chair..", price: "1,299", type: "furniture", cat: "chair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/n/7/x/1-wrought-iron-60-9-ifa-ergolux-hb-w-g-iafa-119-3-original-imahjdd7hsdzpydt.jpeg?q=70" },

    { id: 105, name: "Chair..", price: "1,299", type: "furniture", cat: "chair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/outdoor-chair/7/g/q/79-5-4-pp-polypropylene-43-15-mg-wave-white-pk4-marigold-49-original-imah2p6stauvf7r2.jpeg?q=70" },

    { id: 106, name: "Chair..", price: "1,299", type: "furniture", cat: "chair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/f/f/2/1-mango-wood-63-dragon-hb-brown-newturn-48-original-imahencza8h5q4gb.jpeg?q=70" },

    { id: 107, name: "Chair..", price: "1,299", type: "furniture", cat: "chair", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/y/d/d/-original-imahhx72wxhrxsnb.jpeg?q=70" },

    { id: 108, name: "Coffee Tables..", price: "2,300", type: "furniture", cat: "coffetable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/r/h/c/40-mdf-40-22-coffee-table-thecraftory-60-golden-original-imahbggg74qe5ftj.jpeg?q=70" },

    { id: 109, name: "Coffee Tables..", price: "2,300", type: "furniture", cat: "coffetable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/i/h/3/60-0-pp-90-0-4-0-mesh-brown-table-arlavya-48-0-brown-original-imahkjcrpgcfhsyb.jpeg?q=70" },

    { id: 110, name: "Coffee Tables..", price: "2,300", type: "furniture", cat: "coffetable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/f/d/u/55-0-wrought-iron-60-0-7-0-round-table-coffee-tale-outletcart-55-original-imahfmzqfwk3a9zh.jpeg?q=70" },

    { id: 111, name: "Coffee Tables..", price: "2,300", type: "furniture", cat: "coffetable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/side-table/k/x/c/30-0-mdf-30-0-1-2-round-12-inch-table-side-table-a-k-traders-30-original-imahkmz4yfcqwvzp.jpeg?q=70" },

    { id: 112, name: "Coffee Tables..", price: "2,300", type: "furniture", cat: "coffetable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/h/4/k/55-mdf-55-7-bult-tbl-w-online-decor-shoppee-45-white-original-imahknwkvnqgdmu8.jpeg?q=70" },

    { id: 113, name: "Coffee Tables..", price: "2,300", type: "furniture", cat: "coffetable", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/y/z/8/90-mango-wood-90-17-wctwh01-greenseal-36-brown-original-imahkg2wcawfdzzh.jpeg?q=70" },

    { id: 114, name: "Realme..", price: "15,999", type: "mobile", cat: "realme", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/f/t/-original-imahfsgv98qsukvz.jpeg?q=70" },

    { id: 115, name: "Realme..", price: "15,999", type: "mobile", cat: "realme", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/9/n/-original-imahgdr4shzrvcfh.jpeg?q=70" },

    { id: 116, name: "Realme..", price: "15,999", type: "mobile", cat: "realme", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/f/j/-original-imahdz2gdtkwhz9g.jpeg?q=70" },

    { id: 117, name: "Realme..", price: "15,999", type: "mobile", cat: "realme", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/v/z/-original-imah28xpzzwz4fwg.jpeg?q=70" },

    { id: 118, name: "Realme..", price: "15,999", type: "mobile", cat: "realme", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/4/n/-original-imahezrzhqnjdwjr.jpeg?q=70" },

    { id: 119, name: "Realme..", price: "15,999", type: "mobile", cat: "realme", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/f/j/-original-imahdz2gdtkwhz9g.jpeg?q=70" },

    { id: 120, name: "iPhone..", price: "1,20,599", type: "mobile", cat: "iphone", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },

    { id: 121, name: "iPhone..", price: "1,20,599", type: "mobile", cat: "iphone", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/8/-original-imahggevcrkzezzv.jpeg?q=70" },

    { id: 122, name: "iPhone..", price: "1,20,599", type: "mobile", cat: "iphone", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/7/f/-original-imahft5gfgwpt6pr.jpeg?q=70" },

    { id: 123, name: "iPhone..", price: "1,20,599", type: "mobile", cat: "iphone", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },

    { id: 124, name: "Vivo..", price: "10,999", type: "mobile", cat: "vivo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/a/x/-original-imahfkvfhcddfzvh.jpeg?q=70" },

    { id: 125, name: "Vivo..", price: "10,999", type: "mobile", cat: "vivo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/3/i/-original-imahfkvffkd4qhma.jpeg?q=70" },

    { id: 126, name: "Vivo..", price: "10,999", type: "mobile", cat: "vivo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/k/r/-original-imahfhudssrdghcz.jpeg?q=70" },

    { id: 127, name: "Vivo..", price: "10,999", type: "mobile", cat: "vivo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/q/r/-original-imahjzxknyum2hqe.jpeg?q=70" },

    { id: 128, name: "Redmi..", price: "12,799", type: "mobile", cat: "redmi", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/t/l/-original-imahg2z9zy2ea2py.jpeg?q=70" },

    { id: 129, name: "Redmi..", price: "12,799", type: "mobile", cat: "redmi", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/g/o/-original-imahb56zdk5ybj9r.jpeg?q=70" },

    { id: 130, name: "Redmi..", price: "12,799", type: "mobile", cat: "redmi", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/m/t/-original-imahg2z9zggggbgq.jpeg?q=70" },
    { id: 131, name: "Oppo..", price: "15,899", type: "mobile", cat: "oppo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/l/1/-original-imahbfd4cgh53kmh.jpeg?q=70" },
    { id: 132, name: "Oppo..", price: "15,899", type: "mobile", cat: "oppo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/y/-original-imahfw4vez79uubg.jpeg?q=70" },
    { id: 133, name: "Oppo..", price: "15,899", type: "mobile", cat: "oppo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/k/e/-original-imahbfd4zqn9zazz.jpeg?q=70" },
    { id: 134, name: "Oppo..", price: "15,899", type: "mobile", cat: "oppo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/k/e/-original-imahbfd4zqn9zazz.jpeg?q=70" },
    { id: 135, name: "Oppo..", price: "15,899", type: "mobile", cat: "oppo", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/g/-original-imahkkpg3hbtardn.jpeg?q=70" },
    { id: 136, name: "Nothing..", price: "25,899", type: "mobile", cat: "nothing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/9/z/-original-imahg65qswapwapx.jpeg?q=70" },
    { id: 137, name: "Nothing..", price: "25,899", type: "mobile", cat: "nothing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/0/q/-original-imahgfnygwdeyrzp.jpeg?q=70" },
    { id: 138, name: "Nothing..", price: "25,899", type: "mobile", cat: "nothing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/9/z/-original-imahg65qswapwapx.jpeg?q=70" },
    { id: 139, name: "Nothing..", price: "25,899", type: "mobile", cat: "nothing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/o/s/-original-imahg65qb3hksgjv.jpeg?q=70" },
    { id: 140, name: "Nothing..", price: "25,899", type: "mobile", cat: "nothing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/0/q/-original-imahgfnygwdeyrzp.jpeg?q=70" },
    { id: 141, name: "Headphones..", price: "2,500", type: "electronics", cat: "headphone", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/0/r/5/-original-imahgnf4gectpgv7.jpeg?q=70" },
    { id: 142, name: "Headphones..", price: "2,500", type: "electronics", cat: "headphone", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/n/u/1/nb124-clock-upto-100-hours-playtime-enc-voice-changer-fast-original-imahd8bg4a8jmzud.jpeg?q=70" },
    { id: 143, name: "Headphones..", price: "2,500", type: "electronics", cat: "headphone", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/r/9/bs-ultrapood-bullstorm-original-imahcus46hzumv9a.jpeg?q=70" },
    { id: 144, name: "Headphones..", price: "2,500", type: "electronics", cat: "headphone", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/7/m/nb111-wireless-headphone-magnetic-neckband-250h-standby-200mah-original-imahkas45ravmtzt.jpeg?q=70" },
    { id: 145, name: "Headphones..", price: "2,500", type: "electronics", cat: "headphone", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/2/o/g/-original-imahdtg3txyh6gwy.jpeg?q=70" },
    { id: 146, name: "Washine Machine..", price: "8,950", type: "electronics", cat: "washing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/k/e/6/-original-imahhy85nzyjgxx6.jpeg?q=70" },
    { id: 147, name: "Washine Machine..", price: "8,950", type: "electronics", cat: "washing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/g/j/d/-original-imahgw42nfzavakx.jpeg?q=70" },
    { id: 148, name: "Washine Machine..", price: "8,950", type: "electronics", cat: "washing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/d/b/i/-original-imah8eyy5t6r9jmk.jpeg?q=70" },
    { id: 149, name: "Washine Machine..", price: "8,950", type: "electronics", cat: "washing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/k/8/5/-original-imahgy774gxkmxd9.jpeg?q=70" },
    { id: 150, name: "Washine Machine..", price: "8,950", type: "electronics", cat: "washing", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/5/l/t/-original-imahjx2yz8qzhcjg.jpeg?q=70" },
    { id: 151, name: "Tablets..", price: "15,750", type: "electronics", cat: "tablet", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/d/q/u/-original-imahjg35wtu7q4ej.jpeg?q=70" },
    { id: 152, name: "Tablets..", price: "15,750", type: "electronics", cat: "tablet", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/y/8/rmp2204-realme-original-imagrhcqdhdyc9tg.jpeg?q=70" },
    { id: 153, name: "Tablets..", price: "15,750", type: "electronics", cat: "tablet", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/z/b/c/-original-imahfdyfragxcjsh.jpeg?q=70" },
    { id: 154, name: "Tablets..", price: "15,750", type: "electronics", cat: "tablet", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/x/e/r/sm-x230nzaains-samsung-original-imahjza7f9xp4afj.jpeg?q=70" },
    { id: 155, name: "Laptop..", price: "80,000", type: "electronics", cat: "laptop", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/r/p/-original-imahg5ftvnmqhgqp.jpeg?q=70" },
    { id: 156, name: "Laptop..", price: "80,000", type: "electronics", cat: "laptop", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/n/r/al15-51-thin-and-light-laptop-acer-original-imagrtakqhprf7eu.jpeg?q=70" },
    { id: 157, name: "Laptop..", price: "80,000", type: "electronics", cat: "laptop", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/o/h/-original-imahg5fydhnpgbyz.jpeg?q=70" },
    { id: 158, name: "Laptop..", price: "80,000", type: "electronics", cat: "laptop", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/z/9/-original-imahg5fyefybajws.jpeg?q=70" },
    { id: 159, name: "Tv's", price: "12,450", type: "electronics", cat: "tv", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/p/s/-original-imahhea7zqgyrcfk.jpeg?q=70" },
    { id: 160, name: "Tv's", price: "12,450", type: "electronics", cat: "tv", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/e/l/s/-original-imahg4z3hyyb3zpf.jpeg?q=70" },
    { id: 161, name: "Tv's", price: "12,450", type: "electronics", cat: "tv", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/l/c/c/-original-imahju6jzbzfaxfn.jpeg?q=70" },
    { id: 162, name: "Tv's", price: "12,450", type: "electronics", cat: "tv", img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/o/g/x/-original-imahjph4yyrgf69h.jpeg?q=70" },
    { id: 163, name: "Mens Tshirts..", price: "1500", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/8/o/u/l-ts124-vebnor-original-imahjkvzykhb59wr.jpeg?q=70" },
    { id: 164, name: "Mens Tshirts..", price: "1500", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/t/0/-original-imahjzqbjh3mcayb.jpeg?q=70" },
    { id: 165, name: "Mens Tshirts..", price: "1500", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/kvvad8w0/t-shirt/w/g/m/xxl-15070112-wrogn-original-imag8z2zf6fbgkt8.jpeg?q=70" },
    { id: 166, name: "Mens Tshirts..", price: "1500", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/d/e/-original-imahjzpxchn2hvhq.jpeg?q=70" },
    { id: 167, name: "Mens Tshirts..", price: "1500", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/y/o/s-couple-holi-tshirt-white-roy-s-original-imah9twkweayrxsu.jpeg?q=70" },
    { id: 168, name: "Mens Jeans", price: "1200", type: "fashion", cat: "jeans", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/w/1/o/34-pf-01-baggy-105-fude-pride-original-imah9n8y8fzmt8vc.jpeg?q=70" },
    { id: 169, name: "Mens Jeans", price: "1200", type: "fashion", cat: "jeans", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/c/4/9/32-azeecom-azureattire-original-imahdj6hmz5xqbdp.jpeg?q=70" },
    { id: 170, name: "Mens Jeans", price: "1200", type: "fashion", cat: "jeans", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jean/e/0/d/32-mxn-baggy-darkblue-105-meixn-original-imahdzy7fatzdxxh.jpeg?q=70" },
    { id: 171, name: "Mens Jeans", price: "1200", type: "fashion", cat: "jeans", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/y/j/t/12-13-years-p-kids-double-shade-black-grey-plus91-original-imahkmudjugzjxzj.jpeg?q=70" },
    { id: 172, name: "Mens Jeans", price: "1200", type: "fashion", cat: "jeans", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/d/p/7/32-grey-wisker-2-brexx-original-imah3wjmgbk3mgh7.jpeg?q=70" },
    { id: 173, name: "Casual Shirts..", price: "1420", type: "fashion", cat: "casualshirts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/c/k/m-dark-lightblue-rodeiz-original-imahjyqpbg3dpuu8.jpeg?q=70" },
    { id: 174, name: "Casual Shirts..", price: "1420", type: "fashion", cat: "casualshirts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/8/m/l-lava-1-jaitrafab-original-imahg3pykz8mj5n4.jpeg?q=70" },
    { id: 175, name: "Casual Shirts..", price: "1420", type: "fashion", cat: "casualshirts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/0/u/a/l-met-shirt1801-metronaut-original-imahgrb9gvpfa8qm.jpeg?q=70" },
    { id: 176, name: "Casual Shirts..", price: "1420", type: "fashion", cat: "casualshirts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/q/5/3xl-cnz-lst-navy-vtexx-original-imahdrafgemvc7aa.jpeg?q=70" },
    { id: 177, name: "Casual Shirts..", price: "1420", type: "fashion", cat: "casualshirts", img: "https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/u/x/b/s-dpc-shirt-nortex-original-imahhqhzmmtdrukm.jpeg?q=90" },
    { id: 178, name: "Shorts Shoes..", price: "2500", type: "fashion", cat: "shoes", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/e/q/10-22g-13401-10-0-campus-tndr-ylw-grnshen-original-imahjgtdrsb5zz5f.jpeg?q=70" },
    { id: 179, name: "Shorts Shoes..", price: "2500", type: "fashion", cat: "shoes", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/2/s/8-sport-24503-8-nobelite-white-black-resized-2-original-imahf3x7e8yanbyy.jpeg?q=70" },
    { id: 180, name: "Shorts Shoes..", price: "2500", type: "fashion", cat: "shoes", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/b/q/10-5g-845-10-campus-mod-blu-wht-resized-2-original-imahhdgz6tpzkwvq.jpeg?q=70" },
    { id: 181, name: "Shorts Shoes..", price: "2500", type: "fashion", cat: "shoes", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/a/b/8-satas-wht-sky-8-clymb-blue-original-imahdt8bkagc4fgb.jpeg?q=70" },
    { id: 182, name: "Shorts Shoes..", price: "2500", type: "fashion", cat: "shoes", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/q/h/12-cosco-blue-12-clymb-blue-original-imahdnuyfssqcyzu.jpeg?q=70" },
    { id: 183, name: "Kids Dresses..", price: "2300", type: "fashion", cat: "kids", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kids-dress/a/i/5/3-4-years-frock-copy-lilionss-original-imahgcp2n3dmgwkq.jpeg?q=70" },
    { id: 184, name: "Kids Dresses..", price: "2300", type: "fashion", cat: "kids", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/z/3/u/11-12-years-dn-150-mdmongaldresses-resized-2-original-imahdue4pxasqecr.jpeg?q=70" },
    { id: 185, name: "Kids Dresses..", price: "2300", type: "fashion", cat: "kids", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/9/w/h/2-3-years-cld1-jilani-traders-original-imahhynz3azwy9a3.jpeg?q=70" },
    { id: 186, name: "Kids Dresses..", price: "2300", type: "fashion", cat: "kids", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/n/a/r/6-9-months-blue-white-micky-calcutta-fashion-original-imahkcwuzf9dznhw.jpeg?q=70" },
    { id: 187, name: "Kids Dresses..", price: "2300", type: "fashion", cat: "kids", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/h/z/e/2-3-years-lt-dirt-libu-n-pixie-original-imaheb7zf73qkywk.jpeg?q=70" },
    { id: 188, name: "Trendy Street", price: "1640", type: "fashion", cat: "trendystreet", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/u/a/p/30-street-4button-black-street-mall-original-imahjzbsqnsvhk8x.jpeg?q=70" },
    { id: 189, name: "Trendy Street", price: "1640", type: "fashion", cat: "trendystreet", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/7/w/o/xs-tee00009507-street-9-original-imah3h7kb4bgxe8y.jpeg?q=70" },
    { id: 190, name: "Trendy Street", price: "1640", type: "fashion", cat: "trendystreet", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/z/6/xl-tee00003746-street9-original-imagjh5bfcawd2rs.jpeg?q=70" },
    { id: 191, name: "Trendy Street", price: "1640", type: "fashion", cat: "trendystreet", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/k/f/l-tee00003744-street9-original-imagjag4gbzhyhjy.jpeg?q=70" },
    { id: 192, name: "Trendy Street", price: "1640", type: "fashion", cat: "trendystreet", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/u/d/l-ls-ov-black-545-london-streets-original-imahg76zyghfzcgu.jpeg?q=70" },
    { id: 193, name: "Mens Kurta..", price: "4200", type: "fashion", cat: "kurta", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/z/m/m-f-men-short-kurta-fashion-marts-resized-2-original-imahdnxkgwdvp25x.jpeg?q=70" },
    { id: 194, name: "Mens Kurta..", price: "4200", type: "fashion", cat: "kurta", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/h/6/l-mirror-kurta-kingenterprise-original-imahhqggddnyhyhd.jpeg?q=70" },
    { id: 195, name: "Mens Kurta..", price: "4200", type: "fashion", cat: "kurta", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/p/u/-original-imahjypkunv9nguy.jpeg?q=70" },
    { id: 196, name: "Mens Kurta..", price: "4200", type: "fashion", cat: "kurta", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/4/u/q/m-kfm-kurta-wine-kurtaformen-original-imahhpepz3y7kezz.jpeg?q=70" },
    { id: 197, name: "Mens Kurta..", price: "4200", type: "fashion", cat: "kurta", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/s/x/w/l-kt3-vebnor-original-imahgzuyh9haqxjb.jpeg?q=70" },
    { id: 198, name: "Mens Tshirts..", price: "520", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/t/8/-original-imahe8y77xzqtvvn.jpeg?q=70" },
    { id: 199, name: "Mens Tshirts..", price: "520", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/5/t/m/l-holi-print-t-shirt-sumarabi-original-imahkh9hyeuuaqfq.jpeg?q=70" },
    { id: 200, name: "Mens Tshirts..", price: "520", type: "fashion", cat: "tshirt", img: "https://rukminim2.flixcart.com/image/612/612/kvvad8w0/t-shirt/w/g/m/xxl-15070112-wrogn-original-imag8z2zf6fbgkt8.jpeg?q=70" },
    // Fashion Products
    // Men 
    // id 1-8
    {
        id: 201,
        name: "Polo T-Shirts",
        price: "499",
        cat: "fashion",
        type: "tshirt",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXsT7P1p5_efE7GVn5MWkW5GSYBV5NX5RXnyrbYQPgQqWCRekzEEVQKVbgGh0GfT9HmGZbWm8lPN0_lsR8K_lxGDdgbac2bZOi5jfctR0SdoMJQ-gqdeRS484"
    },
    {
        id: 202,
        name: "Formal Shirts",
        price: 499,
        cat: "fashion",
        type: "casualshirt",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMfn_fr_GCxpl0gITIb0M3CIEXVR5PCMJr1dstIxEnX5kOZ--n4_-n2z9kl9ceWjfpoF-6xMmujEugNABj2HB6ZaxfVD8nLYX-Pjprf5Mn"
    },
    {
        id: 203,
        name: "Denim Jeans",
        price: 899,
        cat: "fashion",
        type: "jeans",
        img :"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbwNCAROr0k9YT2_QN5Z45qz8XqEEdWYRaYQh9i_nQ1T2t099cuyj0QuMdOiX04dhNjroAjRT36kObtYPkjNXWZdo05fsfyeJAinJpuQZAD1WZX4drkx0Z"
    },
    {
        id: 204,
        name: "Denim Cargos",
        price: 999,
        cat: "fashion",
        type: "jeans",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUMtrSf-TltzGO3cn13Yt3sYtNXn8Hs6otEK-ZsGlJSrXje-nSaEgXbFCjrSGgh0Iy8enxqMuQY66xMThPV1HYIYbfn4QM5EBC6-jhyPMI7HEMM4wdKZcSRQ"
    },
    {
        id: 205,
        name: "Fancy Shoes",
        price: 799,
        cat: "fashion",
        type: "shoes",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBDexv6sRTALjHIi_rY54alZgBxVaiAQwRYZsT6A4UuPkauk284GhKkdxoAyxVen76m6ogexLg3DnvmYadx5tnHnw4bko_LQ"
    },



    // Women  
    // id 9-16
    {
        id: 206,
        name: "Floral Kurti",
        price: 699,
        cat: "fashion",
        type: "wkurts",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbxA6rhjgDtbmJKUSD-WxOjkFMgDAWDaVdmMndg9XXxYpkiD0yZPs1A3d_DeEJecnP11Sa6_odYWABNIuhva0GnDzDebd0"
    },
    {
        id: 207,
        name: "Crop Top",
        price: 499,
        cat: "fashion",
        type: "dresses",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuM2j1zLHb0c9Hh0I7Xodi-y6UYXOrphCBAfFkog9KzVMBR7cVVpkhalGj915bkaut0Bm_0PStXbLq0nbxL96ZTbe6GPhYJg"
    },
    {
        id: 208,
        name: "Skinny Jeans",
        price: 899,
        cat: "“fashion",
        type: "“jeans",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZcnpzRjcg2HheBwvBljWHfgIwEMk9ZCGXkaNT2uILzl1uPACgXoyNi5Lt3D57tlMJOyYc-XMa0aEPSMAQqluQCO1OFjjN"
    },
    {
        id: 209,
        name: "Long Dress",
        price: 1199,
        cat: "fashion",
        type: "dresses",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGeF3kDvuVK74oIDlc42dVqjH5IBzPnYHf5RjSiv9jed0-gCdp5Lje5j7AStOZRwzi4NSf47iPnvMTPzpx5wU2ihdYKywLi1bSyKGkqyE3"
    },
    {
        id: 210,
        name: "Saree",
        price: 1499,
        cat: "fashion",
        type: "saree",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnVoQHsr5LDMspezJ2w2VA9jnC0TK_V64OcWzjbXFdDkaTrHE2NXdSJ1dJCMm_iPt7Cozq8Vr7QASDr55TwBSMWcC85hJBzvpdflS0rLHR-QyEXF4DmLyZ"
    },
    {
        id: 211,
        name: "Yoga Pants",
        price: 799,
        cat: "fashion",
        type: "jeans",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbCEqFZOCfuP_yc99fUH4ERiTH7cjbay_75xtJZeaKyKKTW8sSBbJPVOQGRHXxuDcpx15EeGO-hF-gWyA1tWCQmzMbtMoN"
    },
    {
        id: 212,
        name: "Casual T-Shirt",
        price: 399,
        cat: "fashion",
        type: "tshirt",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQoMBC_Gv1Q_jaCsu19J1WxHjkfaBX1i0tBV0B4bwAF-m3CDfxEHUrWmcRReDkn3X2bLE3NYiLDrPxrzLdyOlxi-Eu48RbyJ0ekg-MKQU7hshJxTGluZOy8dA"
    },
    // Mobile Products
    // id 17-24
    {
        id: 213,
        name: "Galaxy S24 Ultra",
        price: 124999,
        cat: "mobile",
        brand: "samsung",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHMgK0eR9N5-_HB9nG2NHB0eExECqVS_j8hGbaM9qbjxWj7_otwsCuZSvzjwhapQLL4boVcPofxqAPmKf6VmFvjgfA4GCs"
    },
    {
        id: 214,
        name: "iPhone 15 Pro Max",
        price: 139900,
        cat: "mobile",
        brand: "iphone",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT54kv7MAfjV629PRhJhLeWIrf_PVMoh77PycckUCmhXsnhBVD-jOa0nOR31jSRsA6-Fexb8GHKQPanhnIkyjozAbG3Ek1Gdc58irfXi0JlIJzsIMQeyFS94PQ"
    },
    {
        id: 215,
        name: "OnePlus 12",
        price: 64999,
        cat: "mobile",
        brand: "oppo",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbgW1GPahb6WhQzpe0FSXhvV146TipMzQNDuPS8JYMCMIdUoixU-A63ObBp9YGNSxpelMJbcX_0ozh6n_ioWyBOKM8dt5J"
    },
    {
        id: 216,
        name: "Xiaomi Redmi Note 13 Pro",
        price: 27999,
        cat: "mobile",
        brand: "redmi",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQG5G4f7PtOYOx2U1L7BnhUbbnUW2MchrIoCh8KBVqAY6Ivi81ZLcj51prVNRFYoHfh5YSOzaw22Gn45fB7fnZGKXYdnTrdqDwyO-GwAWE"
    },
    {
        id: 217,
        name: "Realme 12 Pro+",
        price: 37999,
        cat: "mobile",
        brand: "realme",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTu5xaEGXyMrrqbxjrwv_M00zOgH-zRbqG1G1JJp4O-RYyGCB10BkfQK5sJL1DahmI5LkekSY23mgzvDGH3VCa8WtSulx6GUSei3U_gKwqUL2j3Fe6LwnFR4A"
    },
    {
        id: 218,
        name: "Vivo V30 Pro",
        price: 42999,
        cat: "mobile",
        brand: "vivo",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_fA9tIqy1g5raWyvG0E8wtNWimpO9dH_IpadGfDeMnHUpliNVp9VgJrKhO6xkXPnAebe6lplLdW7XbPKFHymXePPPdQxngX9Cgkdni4Mu0BwdbcJ9Tkwf1y0"
    },
    {
        id: 219,
        name: "Oppo Reno 12",
        price: 32999,
        cat: "mobile",
        brand: "oppo",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQewC2OCAZa9WeCwIER4qWSnuL1ik7sw4Onc4u_bNrecPAJTdtDaHEOPoG5vNZDsQ2P9UzZ_S-L2rePLR1Q9qMi_BMbqd9GmUS_t-FPjCjQcfBNcOKoXaiUniw"
    },

    // Electronics Products
    // id 25-32
    {
        id: 220,
        name: "Smart LED TV 55",
        price: 45999,
        cat: "electronic",
        type: "tv",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbjb2pL3_o8v94KLMIoG0TPgyUcC4v7L52Xno9MkDMQ77-i-Hl9rwMM745ppfulByG9n_SeBuGgkPbRzEn-qjlFKyoY5DdcA"
    },
    {
        id: 221,
        name: "Bluetooth Soundbar",
        price: 8999,
        cat: "electronic",
        type: "headphone",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4GpuYSB7mazPLP0aAPaL58HVbSS84toB9y4uu3m1sOYn0nHY9bp6R7FoKRzuH-JmsXRTgi-5uRnXBGRadzeIoV8n7F7kmHk2T8Z527xormsbRX4koDZ9JkQ"
    },
    {
        id: 222,
        name: "Wireless Noise-Cancelling Headphones",
        price: 12999,
        cat: "electronic",
        type: "headphone",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUaqAmpmwykPO1eUp37HkfLSG7vPUiUUydVAxbWgo579Ibj2w56jqzLjeXB-E6s-pnraZ8wQcR_4zDKXxhe6R80E_Hv9vHM1lyK1E_74OCme-YbCK8Wa1C"
    },
    {
        id: 223,
        name: "Portable Bluetooth Speaker",
        price: 3499,
        cat: "electronic",
        type: "headphone",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwmJjio13Y6zjM-mwbpvp-Ee8uvIagecA5ZPnsji6qwG0xsPAa9kT5R1tM1Q3UlMVDQVgBUMXlKOx8oGuuMbGtVetuy6-963nyCuHTWY8rqt2iobiPG_l0bg"
    },

    {
        id: 224,
        name: "Queen Size Bed",
        price: 24999,
        cat: "furniture",
        type: "bed",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8TIrxPIT-pU1QvWDvjVyKxaDDOI_b0R1VsD7qvXvTxqT4iafnqjOhjLvro9804GDXHb5hfpjttuQCVh2BVkzI9_tEWR8HUr-VZqesn2cp"
    },
    {
        id: 225,
        name: "chair",
        price: 5999,
        cat: "furniture",
        type: "chair",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0CXp2tCBExRlBhrs15FyNVX8GtOVFgeN9B_5briULx_g3gY46WtnqgdCM9LDvR0meqMfet3lLD2Z1gox6KiGLSFsW11bYEw"
    },
    {
        id: 226,
        name: "Sofa Set (3-Seater)",
        price: 29999,
        cat: "furniture",
        type: "sofa",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRz-fXDgycITk3wI-K45SwWEbNXb5V-PGTX47puRPB15Jt2XBxbZcMMEouKBSP_sg6H85ToSXvP0LOGG4I_Ntttg2FiTGwzgEuZbCmsbu_"
    },
    {
        id: 227,
        name: "Coffee Table",
        price: 4999,
        cat: "furniture",
        type: "coffeetable",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSt2yxtGTTAxgoT66JuqpVbG6IvI9Ba2ZNsRLj6ginMgmVjQzYvHgB5YZXflZEwEkos3WbuyGJ0e_kxTPtGjIOqzwVvk0xe"
    },
    // Beauty Products
    // id 41-48
    {
        id: 228,
        name: "Hydrating Face Cream",
        price: 799,
        cat: "beauty",
        type: "face",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbcILzuA6-bOAwzvyPObRT4-A7oK5N91zN7cDgar9D62qbw7hJqpP17cs0nikAK_mMBGWcLwhyyckgvIVbNZKQe_3Jeq33inz9QqwAzQE-7BlwxCvuPuLGSA"
    },
    {
        id: 229,
        name: "Liquid Foundation",
        price: 1199,
        cat: "beauty",
        type: "face",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSabUc1OFDxsxWytPyaFXdbAS7u_NVfGNbT1Xov1YQhXrrF5epHrtw8fy3m_-6-DbOWgKjJ8b2CBy45fosrEZuVJOL-FfVb-9eQ3JAIRnxETIW95D5bIKaORQ"
    },
    {
        id: 230,
        name: "Matte Lipstick Set",
        price: 699,
        cat: "beauty",
        type: "face",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_9g1m7RThzE-3dfT7v2f5N-d5_phD744iLmE7vzFy8DxFVGUaT2gIAz3_r0-r4phh6Zk-y8_SJ-V-mQs1W7lErIyM6-J6L9Ye-Ftwx7GbLsFejYrAfygg8x5w"
    },
    {
        id: 231,
        name: "Volume Mascara",
        price: 499,
        cat: "beauty",
        type: "face",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRVwcV56ROSVWpKy5AedkTftvkoYWVa-iwl2pzmxXiQwy7j20QxuVoLPCDPO0qweJSWqyAA5wtcmuGlhYnQ1xSZr0DNLFpbfbqpzGJ1eZc2bkTQTRkfBTiMbLu"
    },
    {
        id: 232,
        name: "Nourishing Shampoo",
        price: 599,
        cat: "beauty",
        type: "hair",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMYTob5ZtaH3lNgGXpRcvwMFOKgupajNCoxu37kfzO-DyoIrV0Z40E31fxiBZ9DcXW40XXN30MHDbFu4IQ28RBAT_v-nMjJMHIsj_x9piPJtiTP7hSnEA0n5Y"
    },
    {
        id: 233,
        name: "Revitalizing Conditioner",
        price: 599,
        cat: "beauty",
        type: "hair",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTk4V0pdLPjsQFZQALkuT7DJCB2NvUYhqV48ZLVUzPoWPArqUDT91iS33nP581EQaz9NK51aHxNwLVOK2npoFwM1NtyIuSLEErGfvleGgHn_n8gHcquOVBigfY"
    },
    {
        id: 234,
        name: "Perfume Spray",
        price: 1599,
        cat: "beauty",
        type: "perfume",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaDVgJhVszF2Tc5_cLOHxjPnKIcsY4Hnq45RTfDGLGMSdHM_KrU94mgE5N7QAIKv-5679xAh7vj_WIgAJbdGzAo5NGLCxwYg"
    },
    {
        id: 235,
        name: "Facial Cleanser",
        price: 499,
        cat: "beauty",
        type: "face",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7BMuoBCMoK1C1NGmIxGGKjr6fP7CgFOcnYK8bgUcntpdyYsEZ0ufi-2lfxu2D_20gJZtpj7DCLMiJhj8fEvDIASEGJNE3v8zuYI27tk4t9BOIyjYGmxDQjw"
    }
];