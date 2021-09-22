import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../../constants';

const NavDropdownMenuMobile = ({name,cat,subcat}) => {
    const [isOpen, setIsOpen] = useState(false)
    let categories = [
        {
        _id: "6149659cfaeef34e94c720fe",
        name: "Desarrollo",
        slug: "desarrollo",
        createdAt: "2021-09-21T04:54:52.134Z",
        updatedAt: "2021-09-21T04:54:52.314Z",
        __v: 0,
        sub_categories: [
        {
        _id: "614965e5faeef34e94c720ff",
        name: "Desarrollo web",
        slug: "web",
        createdAt: "2021-09-21T04:56:05.082Z",
        updatedAt: "2021-09-21T04:56:05.252Z",
        __v: 0,
        category: "6149659cfaeef34e94c720fe",
        id: "614965e5faeef34e94c720ff"
        },
        {
        _id: "61496730faeef34e94c72106",
        name: "Hardware",
        slug: "hardware",
        createdAt: "2021-09-21T05:01:36.514Z",
        updatedAt: "2021-09-21T05:01:36.678Z",
        __v: 0,
        category: "6149659cfaeef34e94c720fe",
        id: "61496730faeef34e94c72106"
        },
        {
        _id: "61496739faeef34e94c72107",
        name: "Software",
        slug: "software",
        createdAt: "2021-09-21T05:01:45.736Z",
        updatedAt: "2021-09-21T05:01:45.905Z",
        __v: 0,
        category: "6149659cfaeef34e94c720fe",
        id: "61496739faeef34e94c72107"
        },
        {
        _id: "61496747faeef34e94c72108",
        name: "Lenguajes de programación",
        slug: "lenguajes",
        createdAt: "2021-09-21T05:01:59.029Z",
        updatedAt: "2021-09-21T05:01:59.207Z",
        __v: 0,
        category: "6149659cfaeef34e94c720fe",
        id: "61496747faeef34e94c72108"
        },
        {
        _id: "61496756faeef34e94c72109",
        name: "Frameworks",
        slug: "frameworks",
        createdAt: "2021-09-21T05:02:14.119Z",
        updatedAt: "2021-09-21T05:02:14.292Z",
        __v: 0,
        category: "6149659cfaeef34e94c720fe",
        id: "61496756faeef34e94c72109"
        }
        ],
        articles: [
        {
        categories: [
        "6149659cfaeef34e94c720fe",
        "614966e2faeef34e94c72104",
        "61496714faeef34e94c72105"
        ],
        _id: "6149680cfaeef34e94c7210e",
        body_excerpt: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. ",
        slug: "como-construi-mi-portafolio-web",
        title: "Como construí mi portafolio web",
        content: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. Vivamus tempor, ipsum ut lobortis iaculis, justo urna cursus ligula, eu pretium risus sapien at sem. Sed tincidunt pharetra ex. Donec mattis, neque quis auctor mollis, tellus ligula congue nunc, quis mattis justo diam quis nunc. Ut euismod, enim eu gravida laoreet, lorem sem pellentesque arcu, eu vehicula tellus orci id velit. Praesent volutpat tincidunt ante ut volutpat. Curabitur scelerisque ligula ac ante eleifend malesuada. Vestibulum laoreet libero vitae sollicitudin dapibus. Praesent vulputate nisi sit amet velit sollicitudin faucibus. Etiam faucibus, magna ac molestie semper, lacus quam congue mauris, vitae posuere nisi enim nec tellus. Quisque venenatis turpis vel sagittis tempor. Nam blandit dolor sed turpis commodo bibendum et a enim. Vestibulum placerat interdum mollis. Fusce semper sapien sit amet vulputate cursus. Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. Etiam feugiat porta justo et maximus. Donec sed felis ac dolor eleifend placerat sed in nibh. Nulla at sem ante. Nunc ultrices justo lacus, iaculis bibendum erat faucibus eu. Suspendisse aliquet imperdiet ante a pulvinar. Curabitur sodales urna eu nulla dictum commodo. Sed faucibus ante tortor, in molestie urna tempus id. Integer vitae neque eu diam tristique mollis. Aliquam magna turpis, vulputate vel felis sit amet, pretium rutrum mauris.",
        description: "Como construir tu propio portafolio web con react y tailwind",
        published_at: "2021-09-21T05:05:20.092Z",
        createdAt: "2021-09-21T05:05:16.252Z",
        updatedAt: "2021-09-21T05:05:20.380Z",
        __v: 0,
        article: "614967bffaeef34e94c7210c",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "6147dd99981cb20016217f37",
        name: "Screenshot_1.png",
        alternativeText: "",
        caption: "",
        hash: "Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        size: 1458.9,
        width: 1549,
        height: 929,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099735/Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "Screenshot_1_6cdfdf0750",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_Screenshot_1.png",
        hash: "thumbnail_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 147,
        size: 69.33,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/thumbnail_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "thumbnail_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        large: {
        name: "large_Screenshot_1.png",
        hash: "large_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 1000,
        height: 600,
        size: 832.46,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/large_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "large_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        medium: {
        name: "medium_Screenshot_1.png",
        hash: "medium_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 750,
        height: 450,
        size: 497.34,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/medium_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "medium_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        small: {
        name: "small_Screenshot_1.png",
        hash: "small_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 500,
        height: 300,
        size: 241.26,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/small_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "small_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "6149680cfaeef34e94c7210e"
        ],
        createdAt: "2021-09-20T01:02:17.989Z",
        updatedAt: "2021-09-21T05:05:16.424Z",
        __v: 0,
        id: "6147dd99981cb20016217f37"
        },
        sub_category: "614965e5faeef34e94c720ff",
        id: "6149680cfaeef34e94c7210e"
        }
        ],
        id: "6149659cfaeef34e94c720fe"
        },
        {
        _id: "614966d8faeef34e94c72103",
        name: "Reseñas",
        slug: "resenas",
        createdAt: "2021-09-21T05:00:08.899Z",
        updatedAt: "2021-09-21T05:00:09.069Z",
        __v: 0,
        sub_categories: [
        {
        _id: "61496761faeef34e94c7210a",
        name: "Anime",
        slug: "anime",
        createdAt: "2021-09-21T05:02:25.949Z",
        updatedAt: "2021-09-21T05:02:26.115Z",
        __v: 0,
        category: "614966d8faeef34e94c72103",
        id: "61496761faeef34e94c7210a"
        },
        {
        _id: "6149676bfaeef34e94c7210b",
        name: "Videojuegos",
        slug: "videojuegos",
        createdAt: "2021-09-21T05:02:35.410Z",
        updatedAt: "2021-09-21T05:02:35.577Z",
        __v: 0,
        category: "614966d8faeef34e94c72103",
        id: "6149676bfaeef34e94c7210b"
        }
        ],
        articles: [
        {
        categories: [
        "614966d8faeef34e94c72103",
        "61496714faeef34e94c72105",
        "614966e2faeef34e94c72104"
        ],
        _id: "61496907faeef34e94c72111",
        body_excerpt: "Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. ",
        slug: "horimiya-es-muy-buen-anime",
        title: "Horimiya es muy buen anime",
        content: "Donec eu fringilla est, id sollicitudin lacus. Morbi porta maximus magna blandit volutpat. Quisque magna ipsum, pretium nec dolor ut, fringilla pharetra nisl. Nullam porta, enim sed consectetur laoreet, lorem justo ultricies dui, in dignissim tellus nisi vel odio. Nullam eget nibh libero. Nunc quis luctus tortor. Ut ex nunc, suscipit ut fermentum id, sagittis vel sem. Mauris rhoncus nunc vel laoreet mattis. Morbi eros metus, semper id velit sit amet, eleifend ornare lorem. Praesent bibendum dui nec sem dapibus, rutrum sodales elit molestie. Maecenas dictum faucibus vestibulum. Vestibulum mollis lectus in euismod semper. Nunc non nunc odio. Pellentesque sodales quam vitae nibh luctus vehicula. Nullam sit amet congue dui. Quisque dolor turpis, condimentum eget suscipit at, dapibus quis augue. Sed imperdiet augue at tellus viverra maximus. Nam congue consectetur faucibus. Vivamus sit amet facilisis justo. Nullam fermentum purus ut consequat finibus. Etiam consectetur, magna eu varius egestas, nisi nisl vulputate justo, ut varius felis urna et ex. Sed id mauris bibendum, lobortis magna sed, eleifend justo. Fusce faucibus commodo leo vitae imperdiet. Suspendisse eget ante efficitur, iaculis leo ut, dignissim tortor. Etiam ut dignissim diam. Praesent tincidunt elit et magna consequat dapibus. Morbi metus eros, mattis nec feugiat vel, semper vitae purus. Duis nec odio ut enim ullamcorper mattis. Nulla sed justo dapibus, mollis justo nec, elementum dolor. In vel purus ipsum. Vivamus eget risus aliquet, dapibus tellus ut, volutpat mauris. Quisque nisi elit, semper id luctus nec, ultrices porta lacus. Ut finibus ligula vitae libero consequat iaculis. Morbi dui velit, tempus quis ipsum ut, vestibulum ultricies risus. Nulla sollicitudin odio odio, eget aliquam quam commodo at. Donec eu nulla pellentesque nulla sollicitudin porttitor a sit amet nibh. Cras placerat eleifend leo, ut ullamcorper ligula volutpat ut. Nam sollicitudin ac magna rutrum sodales. Vivamus et lorem in elit lacinia sagittis.",
        description: "Lo es en serio x'D ",
        published_at: "2021-09-21T05:09:45.738Z",
        createdAt: "2021-09-21T05:09:27.170Z",
        updatedAt: "2021-09-21T05:09:46.024Z",
        __v: 0,
        article: "6149680cfaeef34e94c7210e",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "614968e2faeef34e94c72110",
        name: "6fcb35e62a176ff01bd86f7de7c1147e.png",
        alternativeText: "",
        caption: "",
        hash: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        size: 136.06,
        width: 499,
        height: 291,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200929/6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e.png",
        hash: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 143,
        size: 54.24,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200930/thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "61496907faeef34e94c72111"
        ],
        createdAt: "2021-09-21T05:08:50.108Z",
        updatedAt: "2021-09-21T05:09:27.339Z",
        __v: 0,
        id: "614968e2faeef34e94c72110"
        },
        sub_category: "61496761faeef34e94c7210a",
        id: "61496907faeef34e94c72111"
        }
        ],
        id: "614966d8faeef34e94c72103"
        },
        {
        _id: "614966e2faeef34e94c72104",
        name: "Destacado",
        slug: "destacado",
        createdAt: "2021-09-21T05:00:18.256Z",
        updatedAt: "2021-09-21T05:00:18.427Z",
        __v: 0,
        sub_categories: [ ],
        articles: [
        {
        categories: [
        "6149659cfaeef34e94c720fe",
        "614966e2faeef34e94c72104",
        "61496714faeef34e94c72105"
        ],
        _id: "6149680cfaeef34e94c7210e",
        body_excerpt: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. ",
        slug: "como-construi-mi-portafolio-web",
        title: "Como construí mi portafolio web",
        content: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. Vivamus tempor, ipsum ut lobortis iaculis, justo urna cursus ligula, eu pretium risus sapien at sem. Sed tincidunt pharetra ex. Donec mattis, neque quis auctor mollis, tellus ligula congue nunc, quis mattis justo diam quis nunc. Ut euismod, enim eu gravida laoreet, lorem sem pellentesque arcu, eu vehicula tellus orci id velit. Praesent volutpat tincidunt ante ut volutpat. Curabitur scelerisque ligula ac ante eleifend malesuada. Vestibulum laoreet libero vitae sollicitudin dapibus. Praesent vulputate nisi sit amet velit sollicitudin faucibus. Etiam faucibus, magna ac molestie semper, lacus quam congue mauris, vitae posuere nisi enim nec tellus. Quisque venenatis turpis vel sagittis tempor. Nam blandit dolor sed turpis commodo bibendum et a enim. Vestibulum placerat interdum mollis. Fusce semper sapien sit amet vulputate cursus. Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. Etiam feugiat porta justo et maximus. Donec sed felis ac dolor eleifend placerat sed in nibh. Nulla at sem ante. Nunc ultrices justo lacus, iaculis bibendum erat faucibus eu. Suspendisse aliquet imperdiet ante a pulvinar. Curabitur sodales urna eu nulla dictum commodo. Sed faucibus ante tortor, in molestie urna tempus id. Integer vitae neque eu diam tristique mollis. Aliquam magna turpis, vulputate vel felis sit amet, pretium rutrum mauris.",
        description: "Como construir tu propio portafolio web con react y tailwind",
        published_at: "2021-09-21T05:05:20.092Z",
        createdAt: "2021-09-21T05:05:16.252Z",
        updatedAt: "2021-09-21T05:05:20.380Z",
        __v: 0,
        article: "614967bffaeef34e94c7210c",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "6147dd99981cb20016217f37",
        name: "Screenshot_1.png",
        alternativeText: "",
        caption: "",
        hash: "Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        size: 1458.9,
        width: 1549,
        height: 929,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099735/Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "Screenshot_1_6cdfdf0750",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_Screenshot_1.png",
        hash: "thumbnail_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 147,
        size: 69.33,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/thumbnail_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "thumbnail_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        large: {
        name: "large_Screenshot_1.png",
        hash: "large_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 1000,
        height: 600,
        size: 832.46,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/large_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "large_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        medium: {
        name: "medium_Screenshot_1.png",
        hash: "medium_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 750,
        height: 450,
        size: 497.34,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/medium_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "medium_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        small: {
        name: "small_Screenshot_1.png",
        hash: "small_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 500,
        height: 300,
        size: 241.26,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/small_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "small_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "6149680cfaeef34e94c7210e"
        ],
        createdAt: "2021-09-20T01:02:17.989Z",
        updatedAt: "2021-09-21T05:05:16.424Z",
        __v: 0,
        id: "6147dd99981cb20016217f37"
        },
        sub_category: "614965e5faeef34e94c720ff",
        id: "6149680cfaeef34e94c7210e"
        },
        {
        categories: [
        "614966d8faeef34e94c72103",
        "61496714faeef34e94c72105",
        "614966e2faeef34e94c72104"
        ],
        _id: "61496907faeef34e94c72111",
        body_excerpt: "Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. ",
        slug: "horimiya-es-muy-buen-anime",
        title: "Horimiya es muy buen anime",
        content: "Donec eu fringilla est, id sollicitudin lacus. Morbi porta maximus magna blandit volutpat. Quisque magna ipsum, pretium nec dolor ut, fringilla pharetra nisl. Nullam porta, enim sed consectetur laoreet, lorem justo ultricies dui, in dignissim tellus nisi vel odio. Nullam eget nibh libero. Nunc quis luctus tortor. Ut ex nunc, suscipit ut fermentum id, sagittis vel sem. Mauris rhoncus nunc vel laoreet mattis. Morbi eros metus, semper id velit sit amet, eleifend ornare lorem. Praesent bibendum dui nec sem dapibus, rutrum sodales elit molestie. Maecenas dictum faucibus vestibulum. Vestibulum mollis lectus in euismod semper. Nunc non nunc odio. Pellentesque sodales quam vitae nibh luctus vehicula. Nullam sit amet congue dui. Quisque dolor turpis, condimentum eget suscipit at, dapibus quis augue. Sed imperdiet augue at tellus viverra maximus. Nam congue consectetur faucibus. Vivamus sit amet facilisis justo. Nullam fermentum purus ut consequat finibus. Etiam consectetur, magna eu varius egestas, nisi nisl vulputate justo, ut varius felis urna et ex. Sed id mauris bibendum, lobortis magna sed, eleifend justo. Fusce faucibus commodo leo vitae imperdiet. Suspendisse eget ante efficitur, iaculis leo ut, dignissim tortor. Etiam ut dignissim diam. Praesent tincidunt elit et magna consequat dapibus. Morbi metus eros, mattis nec feugiat vel, semper vitae purus. Duis nec odio ut enim ullamcorper mattis. Nulla sed justo dapibus, mollis justo nec, elementum dolor. In vel purus ipsum. Vivamus eget risus aliquet, dapibus tellus ut, volutpat mauris. Quisque nisi elit, semper id luctus nec, ultrices porta lacus. Ut finibus ligula vitae libero consequat iaculis. Morbi dui velit, tempus quis ipsum ut, vestibulum ultricies risus. Nulla sollicitudin odio odio, eget aliquam quam commodo at. Donec eu nulla pellentesque nulla sollicitudin porttitor a sit amet nibh. Cras placerat eleifend leo, ut ullamcorper ligula volutpat ut. Nam sollicitudin ac magna rutrum sodales. Vivamus et lorem in elit lacinia sagittis.",
        description: "Lo es en serio x'D ",
        published_at: "2021-09-21T05:09:45.738Z",
        createdAt: "2021-09-21T05:09:27.170Z",
        updatedAt: "2021-09-21T05:09:46.024Z",
        __v: 0,
        article: "6149680cfaeef34e94c7210e",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "614968e2faeef34e94c72110",
        name: "6fcb35e62a176ff01bd86f7de7c1147e.png",
        alternativeText: "",
        caption: "",
        hash: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        size: 136.06,
        width: 499,
        height: 291,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200929/6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e.png",
        hash: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 143,
        size: 54.24,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200930/thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "61496907faeef34e94c72111"
        ],
        createdAt: "2021-09-21T05:08:50.108Z",
        updatedAt: "2021-09-21T05:09:27.339Z",
        __v: 0,
        id: "614968e2faeef34e94c72110"
        },
        sub_category: "61496761faeef34e94c7210a",
        id: "61496907faeef34e94c72111"
        }
        ],
        id: "614966e2faeef34e94c72104"
        },
        {
        _id: "61496714faeef34e94c72105",
        name: "Reciente",
        slug: "reciente",
        createdAt: "2021-09-21T05:01:08.720Z",
        updatedAt: "2021-09-21T05:01:08.900Z",
        __v: 0,
        sub_categories: [ ],
        articles: [
        {
        categories: [
        "61496714faeef34e94c72105"
        ],
        _id: "614967bffaeef34e94c7210c",
        title: "Primer post",
        slug: "primer-post",
        description: "Primer post",
        body_excerpt: ":D",
        content: "test",
        published_at: "2021-09-21T05:04:01.769Z",
        createdAt: "2021-09-21T05:03:59.298Z",
        updatedAt: "2021-09-21T05:04:02.051Z",
        __v: 0,
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "6147dea4981cb20016217f3b",
        name: "Shalltear Splat.jpg",
        alternativeText: "",
        caption: "",
        hash: "Shalltear_Splat_00191c5055",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 183.58,
        width: 1600,
        height: 870,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632100003/Shalltear_Splat_00191c5055.jpg",
        provider_metadata: {
        public_id: "Shalltear_Splat_00191c5055",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_Shalltear Splat.jpg",
        hash: "thumbnail_Shalltear_Splat_00191c5055",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 245,
        height: 133,
        size: 9.3,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632100003/thumbnail_Shalltear_Splat_00191c5055.jpg",
        provider_metadata: {
        public_id: "thumbnail_Shalltear_Splat_00191c5055",
        resource_type: "image"
        }
        },
        large: {
        name: "large_Shalltear Splat.jpg",
        hash: "large_Shalltear_Splat_00191c5055",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 1000,
        height: 544,
        size: 95.73,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632100004/large_Shalltear_Splat_00191c5055.jpg",
        provider_metadata: {
        public_id: "large_Shalltear_Splat_00191c5055",
        resource_type: "image"
        }
        },
        medium: {
        name: "medium_Shalltear Splat.jpg",
        hash: "medium_Shalltear_Splat_00191c5055",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 750,
        height: 408,
        size: 58.91,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632100004/medium_Shalltear_Splat_00191c5055.jpg",
        provider_metadata: {
        public_id: "medium_Shalltear_Splat_00191c5055",
        resource_type: "image"
        }
        },
        small: {
        name: "small_Shalltear Splat.jpg",
        hash: "small_Shalltear_Splat_00191c5055",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 500,
        height: 272,
        size: 30.95,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632100004/small_Shalltear_Splat_00191c5055.jpg",
        provider_metadata: {
        public_id: "small_Shalltear_Splat_00191c5055",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "614967bffaeef34e94c7210c"
        ],
        createdAt: "2021-09-20T01:06:44.972Z",
        updatedAt: "2021-09-21T05:03:59.473Z",
        __v: 0,
        id: "6147dea4981cb20016217f3b"
        },
        id: "614967bffaeef34e94c7210c"
        },
        {
        categories: [
        "6149659cfaeef34e94c720fe",
        "614966e2faeef34e94c72104",
        "61496714faeef34e94c72105"
        ],
        _id: "6149680cfaeef34e94c7210e",
        body_excerpt: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. ",
        slug: "como-construi-mi-portafolio-web",
        title: "Como construí mi portafolio web",
        content: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. Vivamus tempor, ipsum ut lobortis iaculis, justo urna cursus ligula, eu pretium risus sapien at sem. Sed tincidunt pharetra ex. Donec mattis, neque quis auctor mollis, tellus ligula congue nunc, quis mattis justo diam quis nunc. Ut euismod, enim eu gravida laoreet, lorem sem pellentesque arcu, eu vehicula tellus orci id velit. Praesent volutpat tincidunt ante ut volutpat. Curabitur scelerisque ligula ac ante eleifend malesuada. Vestibulum laoreet libero vitae sollicitudin dapibus. Praesent vulputate nisi sit amet velit sollicitudin faucibus. Etiam faucibus, magna ac molestie semper, lacus quam congue mauris, vitae posuere nisi enim nec tellus. Quisque venenatis turpis vel sagittis tempor. Nam blandit dolor sed turpis commodo bibendum et a enim. Vestibulum placerat interdum mollis. Fusce semper sapien sit amet vulputate cursus. Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. Etiam feugiat porta justo et maximus. Donec sed felis ac dolor eleifend placerat sed in nibh. Nulla at sem ante. Nunc ultrices justo lacus, iaculis bibendum erat faucibus eu. Suspendisse aliquet imperdiet ante a pulvinar. Curabitur sodales urna eu nulla dictum commodo. Sed faucibus ante tortor, in molestie urna tempus id. Integer vitae neque eu diam tristique mollis. Aliquam magna turpis, vulputate vel felis sit amet, pretium rutrum mauris.",
        description: "Como construir tu propio portafolio web con react y tailwind",
        published_at: "2021-09-21T05:05:20.092Z",
        createdAt: "2021-09-21T05:05:16.252Z",
        updatedAt: "2021-09-21T05:05:20.380Z",
        __v: 0,
        article: "614967bffaeef34e94c7210c",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "6147dd99981cb20016217f37",
        name: "Screenshot_1.png",
        alternativeText: "",
        caption: "",
        hash: "Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        size: 1458.9,
        width: 1549,
        height: 929,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099735/Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "Screenshot_1_6cdfdf0750",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_Screenshot_1.png",
        hash: "thumbnail_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 147,
        size: 69.33,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/thumbnail_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "thumbnail_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        large: {
        name: "large_Screenshot_1.png",
        hash: "large_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 1000,
        height: 600,
        size: 832.46,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/large_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "large_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        medium: {
        name: "medium_Screenshot_1.png",
        hash: "medium_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 750,
        height: 450,
        size: 497.34,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/medium_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "medium_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        small: {
        name: "small_Screenshot_1.png",
        hash: "small_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 500,
        height: 300,
        size: 241.26,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/small_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "small_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "6149680cfaeef34e94c7210e"
        ],
        createdAt: "2021-09-20T01:02:17.989Z",
        updatedAt: "2021-09-21T05:05:16.424Z",
        __v: 0,
        id: "6147dd99981cb20016217f37"
        },
        sub_category: "614965e5faeef34e94c720ff",
        id: "6149680cfaeef34e94c7210e"
        },
        {
        categories: [
        "614966d8faeef34e94c72103",
        "61496714faeef34e94c72105",
        "614966e2faeef34e94c72104"
        ],
        _id: "61496907faeef34e94c72111",
        body_excerpt: "Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. ",
        slug: "horimiya-es-muy-buen-anime",
        title: "Horimiya es muy buen anime",
        content: "Donec eu fringilla est, id sollicitudin lacus. Morbi porta maximus magna blandit volutpat. Quisque magna ipsum, pretium nec dolor ut, fringilla pharetra nisl. Nullam porta, enim sed consectetur laoreet, lorem justo ultricies dui, in dignissim tellus nisi vel odio. Nullam eget nibh libero. Nunc quis luctus tortor. Ut ex nunc, suscipit ut fermentum id, sagittis vel sem. Mauris rhoncus nunc vel laoreet mattis. Morbi eros metus, semper id velit sit amet, eleifend ornare lorem. Praesent bibendum dui nec sem dapibus, rutrum sodales elit molestie. Maecenas dictum faucibus vestibulum. Vestibulum mollis lectus in euismod semper. Nunc non nunc odio. Pellentesque sodales quam vitae nibh luctus vehicula. Nullam sit amet congue dui. Quisque dolor turpis, condimentum eget suscipit at, dapibus quis augue. Sed imperdiet augue at tellus viverra maximus. Nam congue consectetur faucibus. Vivamus sit amet facilisis justo. Nullam fermentum purus ut consequat finibus. Etiam consectetur, magna eu varius egestas, nisi nisl vulputate justo, ut varius felis urna et ex. Sed id mauris bibendum, lobortis magna sed, eleifend justo. Fusce faucibus commodo leo vitae imperdiet. Suspendisse eget ante efficitur, iaculis leo ut, dignissim tortor. Etiam ut dignissim diam. Praesent tincidunt elit et magna consequat dapibus. Morbi metus eros, mattis nec feugiat vel, semper vitae purus. Duis nec odio ut enim ullamcorper mattis. Nulla sed justo dapibus, mollis justo nec, elementum dolor. In vel purus ipsum. Vivamus eget risus aliquet, dapibus tellus ut, volutpat mauris. Quisque nisi elit, semper id luctus nec, ultrices porta lacus. Ut finibus ligula vitae libero consequat iaculis. Morbi dui velit, tempus quis ipsum ut, vestibulum ultricies risus. Nulla sollicitudin odio odio, eget aliquam quam commodo at. Donec eu nulla pellentesque nulla sollicitudin porttitor a sit amet nibh. Cras placerat eleifend leo, ut ullamcorper ligula volutpat ut. Nam sollicitudin ac magna rutrum sodales. Vivamus et lorem in elit lacinia sagittis.",
        description: "Lo es en serio x'D ",
        published_at: "2021-09-21T05:09:45.738Z",
        createdAt: "2021-09-21T05:09:27.170Z",
        updatedAt: "2021-09-21T05:09:46.024Z",
        __v: 0,
        article: "6149680cfaeef34e94c7210e",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "614968e2faeef34e94c72110",
        name: "6fcb35e62a176ff01bd86f7de7c1147e.png",
        alternativeText: "",
        caption: "",
        hash: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        size: 136.06,
        width: 499,
        height: 291,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200929/6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e.png",
        hash: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 143,
        size: 54.24,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200930/thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "61496907faeef34e94c72111"
        ],
        createdAt: "2021-09-21T05:08:50.108Z",
        updatedAt: "2021-09-21T05:09:27.339Z",
        __v: 0,
        id: "614968e2faeef34e94c72110"
        },
        sub_category: "61496761faeef34e94c7210a",
        id: "61496907faeef34e94c72111"
        }
        ],
        id: "61496714faeef34e94c72105"
        }
        ]
    let subCategories = [
        {
        _id: "614965e5faeef34e94c720ff",
        name: "Desarrollo web",
        slug: "web",
        createdAt: "2021-09-21T04:56:05.082Z",
        updatedAt: "2021-09-21T04:56:05.252Z",
        __v: 0,
        category: {
        _id: "6149659cfaeef34e94c720fe",
        name: "Desarrollo",
        slug: "desarrollo",
        createdAt: "2021-09-21T04:54:52.134Z",
        updatedAt: "2021-09-21T04:54:52.314Z",
        __v: 0,
        id: "6149659cfaeef34e94c720fe"
        },
        articles: [
        {
        categories: [
        "6149659cfaeef34e94c720fe",
        "614966e2faeef34e94c72104",
        "61496714faeef34e94c72105"
        ],
        _id: "6149680cfaeef34e94c7210e",
        body_excerpt: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. ",
        slug: "como-construi-mi-portafolio-web",
        title: "Como construí mi portafolio web",
        content: "Donec non enim ut odio blandit feugiat eget vitae lectus. Vivamus pharetra id est vitae semper. Duis at est justo. Integer quam sapien, viverra ut lacus condimentum, egestas semper sapien. Donec nec tincidunt neque. Ut vitae magna euismod, condimentum sapien sed, posuere est. Donec facilisis tellus ut ligula pretium iaculis. Vivamus tempor, ipsum ut lobortis iaculis, justo urna cursus ligula, eu pretium risus sapien at sem. Sed tincidunt pharetra ex. Donec mattis, neque quis auctor mollis, tellus ligula congue nunc, quis mattis justo diam quis nunc. Ut euismod, enim eu gravida laoreet, lorem sem pellentesque arcu, eu vehicula tellus orci id velit. Praesent volutpat tincidunt ante ut volutpat. Curabitur scelerisque ligula ac ante eleifend malesuada. Vestibulum laoreet libero vitae sollicitudin dapibus. Praesent vulputate nisi sit amet velit sollicitudin faucibus. Etiam faucibus, magna ac molestie semper, lacus quam congue mauris, vitae posuere nisi enim nec tellus. Quisque venenatis turpis vel sagittis tempor. Nam blandit dolor sed turpis commodo bibendum et a enim. Vestibulum placerat interdum mollis. Fusce semper sapien sit amet vulputate cursus. Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. Etiam feugiat porta justo et maximus. Donec sed felis ac dolor eleifend placerat sed in nibh. Nulla at sem ante. Nunc ultrices justo lacus, iaculis bibendum erat faucibus eu. Suspendisse aliquet imperdiet ante a pulvinar. Curabitur sodales urna eu nulla dictum commodo. Sed faucibus ante tortor, in molestie urna tempus id. Integer vitae neque eu diam tristique mollis. Aliquam magna turpis, vulputate vel felis sit amet, pretium rutrum mauris.",
        description: "Como construir tu propio portafolio web con react y tailwind",
        published_at: "2021-09-21T05:05:20.092Z",
        createdAt: "2021-09-21T05:05:16.252Z",
        updatedAt: "2021-09-21T05:05:20.380Z",
        __v: 0,
        article: "614967bffaeef34e94c7210c",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "6147dd99981cb20016217f37",
        name: "Screenshot_1.png",
        alternativeText: "",
        caption: "",
        hash: "Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        size: 1458.9,
        width: 1549,
        height: 929,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099735/Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "Screenshot_1_6cdfdf0750",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_Screenshot_1.png",
        hash: "thumbnail_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 147,
        size: 69.33,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/thumbnail_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "thumbnail_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        large: {
        name: "large_Screenshot_1.png",
        hash: "large_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 1000,
        height: 600,
        size: 832.46,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099736/large_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "large_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        medium: {
        name: "medium_Screenshot_1.png",
        hash: "medium_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 750,
        height: 450,
        size: 497.34,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/medium_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "medium_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        },
        small: {
        name: "small_Screenshot_1.png",
        hash: "small_Screenshot_1_6cdfdf0750",
        ext: ".png",
        mime: "image/png",
        width: 500,
        height: 300,
        size: 241.26,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632099737/small_Screenshot_1_6cdfdf0750.png",
        provider_metadata: {
        public_id: "small_Screenshot_1_6cdfdf0750",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "6149680cfaeef34e94c7210e"
        ],
        createdAt: "2021-09-20T01:02:17.989Z",
        updatedAt: "2021-09-21T05:05:16.424Z",
        __v: 0,
        id: "6147dd99981cb20016217f37"
        },
        sub_category: "614965e5faeef34e94c720ff",
        id: "6149680cfaeef34e94c7210e"
        }
        ],
        id: "614965e5faeef34e94c720ff"
        },
        {
        _id: "61496730faeef34e94c72106",
        name: "Hardware",
        slug: "hardware",
        createdAt: "2021-09-21T05:01:36.514Z",
        updatedAt: "2021-09-21T05:01:36.678Z",
        __v: 0,
        category: {
        _id: "6149659cfaeef34e94c720fe",
        name: "Desarrollo",
        slug: "desarrollo",
        createdAt: "2021-09-21T04:54:52.134Z",
        updatedAt: "2021-09-21T04:54:52.314Z",
        __v: 0,
        id: "6149659cfaeef34e94c720fe"
        },
        articles: [ ],
        id: "61496730faeef34e94c72106"
        },
        {
        _id: "61496739faeef34e94c72107",
        name: "Software",
        slug: "software",
        createdAt: "2021-09-21T05:01:45.736Z",
        updatedAt: "2021-09-21T05:01:45.905Z",
        __v: 0,
        category: {
        _id: "6149659cfaeef34e94c720fe",
        name: "Desarrollo",
        slug: "desarrollo",
        createdAt: "2021-09-21T04:54:52.134Z",
        updatedAt: "2021-09-21T04:54:52.314Z",
        __v: 0,
        id: "6149659cfaeef34e94c720fe"
        },
        articles: [ ],
        id: "61496739faeef34e94c72107"
        },
        {
        _id: "61496747faeef34e94c72108",
        name: "Lenguajes de programación",
        slug: "lenguajes",
        createdAt: "2021-09-21T05:01:59.029Z",
        updatedAt: "2021-09-21T05:01:59.207Z",
        __v: 0,
        category: {
        _id: "6149659cfaeef34e94c720fe",
        name: "Desarrollo",
        slug: "desarrollo",
        createdAt: "2021-09-21T04:54:52.134Z",
        updatedAt: "2021-09-21T04:54:52.314Z",
        __v: 0,
        id: "6149659cfaeef34e94c720fe"
        },
        articles: [ ],
        id: "61496747faeef34e94c72108"
        },
        {
        _id: "61496756faeef34e94c72109",
        name: "Frameworks",
        slug: "frameworks",
        createdAt: "2021-09-21T05:02:14.119Z",
        updatedAt: "2021-09-21T05:02:14.292Z",
        __v: 0,
        category: {
        _id: "6149659cfaeef34e94c720fe",
        name: "Desarrollo",
        slug: "desarrollo",
        createdAt: "2021-09-21T04:54:52.134Z",
        updatedAt: "2021-09-21T04:54:52.314Z",
        __v: 0,
        id: "6149659cfaeef34e94c720fe"
        },
        articles: [ ],
        id: "61496756faeef34e94c72109"
        },
        {
        _id: "61496761faeef34e94c7210a",
        name: "Anime",
        slug: "anime",
        createdAt: "2021-09-21T05:02:25.949Z",
        updatedAt: "2021-09-21T05:02:26.115Z",
        __v: 0,
        category: {
        _id: "614966d8faeef34e94c72103",
        name: "Reseñas",
        slug: "resenas",
        createdAt: "2021-09-21T05:00:08.899Z",
        updatedAt: "2021-09-21T05:00:09.069Z",
        __v: 0,
        id: "614966d8faeef34e94c72103"
        },
        articles: [
        {
        categories: [
        "614966d8faeef34e94c72103",
        "61496714faeef34e94c72105",
        "614966e2faeef34e94c72104"
        ],
        _id: "61496907faeef34e94c72111",
        body_excerpt: "Nulla aliquam venenatis ipsum sit amet congue. Vivamus bibendum vitae velit quis commodo. Cras commodo faucibus sem nec bibendum. Nam vulputate nunc et vulputate cursus. Donec luctus turpis a accumsan laoreet. In dictum tortor porta felis volutpat tempus. ",
        slug: "horimiya-es-muy-buen-anime",
        title: "Horimiya es muy buen anime",
        content: "Donec eu fringilla est, id sollicitudin lacus. Morbi porta maximus magna blandit volutpat. Quisque magna ipsum, pretium nec dolor ut, fringilla pharetra nisl. Nullam porta, enim sed consectetur laoreet, lorem justo ultricies dui, in dignissim tellus nisi vel odio. Nullam eget nibh libero. Nunc quis luctus tortor. Ut ex nunc, suscipit ut fermentum id, sagittis vel sem. Mauris rhoncus nunc vel laoreet mattis. Morbi eros metus, semper id velit sit amet, eleifend ornare lorem. Praesent bibendum dui nec sem dapibus, rutrum sodales elit molestie. Maecenas dictum faucibus vestibulum. Vestibulum mollis lectus in euismod semper. Nunc non nunc odio. Pellentesque sodales quam vitae nibh luctus vehicula. Nullam sit amet congue dui. Quisque dolor turpis, condimentum eget suscipit at, dapibus quis augue. Sed imperdiet augue at tellus viverra maximus. Nam congue consectetur faucibus. Vivamus sit amet facilisis justo. Nullam fermentum purus ut consequat finibus. Etiam consectetur, magna eu varius egestas, nisi nisl vulputate justo, ut varius felis urna et ex. Sed id mauris bibendum, lobortis magna sed, eleifend justo. Fusce faucibus commodo leo vitae imperdiet. Suspendisse eget ante efficitur, iaculis leo ut, dignissim tortor. Etiam ut dignissim diam. Praesent tincidunt elit et magna consequat dapibus. Morbi metus eros, mattis nec feugiat vel, semper vitae purus. Duis nec odio ut enim ullamcorper mattis. Nulla sed justo dapibus, mollis justo nec, elementum dolor. In vel purus ipsum. Vivamus eget risus aliquet, dapibus tellus ut, volutpat mauris. Quisque nisi elit, semper id luctus nec, ultrices porta lacus. Ut finibus ligula vitae libero consequat iaculis. Morbi dui velit, tempus quis ipsum ut, vestibulum ultricies risus. Nulla sollicitudin odio odio, eget aliquam quam commodo at. Donec eu nulla pellentesque nulla sollicitudin porttitor a sit amet nibh. Cras placerat eleifend leo, ut ullamcorper ligula volutpat ut. Nam sollicitudin ac magna rutrum sodales. Vivamus et lorem in elit lacinia sagittis.",
        description: "Lo es en serio x'D ",
        published_at: "2021-09-21T05:09:45.738Z",
        createdAt: "2021-09-21T05:09:27.170Z",
        updatedAt: "2021-09-21T05:09:46.024Z",
        __v: 0,
        article: "6149680cfaeef34e94c7210e",
        author: "6146c8b54820a600166de03f",
        image: {
        _id: "614968e2faeef34e94c72110",
        name: "6fcb35e62a176ff01bd86f7de7c1147e.png",
        alternativeText: "",
        caption: "",
        hash: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        size: 136.06,
        width: 499,
        height: 291,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200929/6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        },
        formats: {
        thumbnail: {
        name: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e.png",
        hash: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 143,
        size: 54.24,
        path: null,
        url: "https://res.cloudinary.com/sayaskye/image/upload/v1632200930/thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89.png",
        provider_metadata: {
        public_id: "thumbnail_6fcb35e62a176ff01bd86f7de7c1147e_240aadae89",
        resource_type: "image"
        }
        }
        },
        provider: "cloudinary",
        related: [
        "61496907faeef34e94c72111"
        ],
        createdAt: "2021-09-21T05:08:50.108Z",
        updatedAt: "2021-09-21T05:09:27.339Z",
        __v: 0,
        id: "614968e2faeef34e94c72110"
        },
        sub_category: "61496761faeef34e94c7210a",
        id: "61496907faeef34e94c72111"
        }
        ],
        id: "61496761faeef34e94c7210a"
        },
        {
        _id: "6149676bfaeef34e94c7210b",
        name: "Videojuegos",
        slug: "videojuegos",
        createdAt: "2021-09-21T05:02:35.410Z",
        updatedAt: "2021-09-21T05:02:35.577Z",
        __v: 0,
        category: {
        _id: "614966d8faeef34e94c72103",
        name: "Reseñas",
        slug: "resenas",
        createdAt: "2021-09-21T05:00:08.899Z",
        updatedAt: "2021-09-21T05:00:09.069Z",
        __v: 0,
        id: "614966d8faeef34e94c72103"
        },
        articles: [ ],
        id: "6149676bfaeef34e94c7210b"
        }
        ]
    const category = categories.map((category) =>
        <div key={category._id} className="">
            <Link className="  hover:bg-main-blue/40 duration-500 transition py-2 px-4 block whitespace-no-wrap border-[1px] border-black/90 hover:border-white " to={`/categories/${category.slug}`}>
                { category.name }
            </Link>
        </div>
    );

    const subCategory = subCategories.map((subCategory) =>
        <div key={subCategory._id} className="">
            <Link className="  hover:bg-main-blue/40 duration-500 transition py-2 px-4 block whitespace-no-wrap border-[1px] border-black/90 hover:border-white " to={`/subcategories/${subCategory.slug}`}>
                { subCategory.name }
            </Link>
        </div>
    );

    const subMenu=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className="border-black border-[1px]  bg-gray-700 mx-2 my-2 rounded-lg text-center justify-center items-center p-4 hover:scale-[1.01] duration-500 transition ease-in hover:bg-main-blue/40 hover:border-white z-10 ">

            <div className="  text-white">
                <button className="font-semibold  rounded inline-flex items-center" onClick={subMenu}>
                    <span className="mr-1">{name}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> 
                    </svg>
                </button>
                {cat && isOpen &&
                    <div className=" bg-gray-700  mt-8">
                        {category}
                    </div>
                }
                {subcat && isOpen &&
                    <div className=" bg-gray-700  mt-8">
                        {subCategory}
                    </div>
                }
            </div>

        </div>
    );
}
 
export default NavDropdownMenuMobile;