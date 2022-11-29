import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "fp13ic0r",
    dataset: 'production',
    apiVersion: '2022-02-01',
    token: "sk9UM4gzrw8l4hidyhPyKhEDjAEmiPcTcgA9ZFmN5bHvVpLamTZ8AhlXCeWCnRnmHAxfwltr8lvbUiLssAYuxbZabMAu3cqDZP7srCYmXq0omAkAsmTpTIOfyi42GAI72VXidoBYBJjCNMxJHUx8baBzPwzgoZSnTxYoiLBgkMsFaNvoTs08",
    useCdn: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)