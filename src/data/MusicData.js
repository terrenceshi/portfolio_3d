// Every time you insert new data, you need to test it and make sure that duration is correct. 
// Sometimes, with rounding, the current time can be bigger than duration from the file metadata.

const MusicData = [
    {
        "title":"40oz Instrumental Cover",
        "src":require("../assets/music/40oz_mixed.mp3"),
        "duration": "0:25",
        "index":0
    },
    {
        "title":"Ultraviolet Sample",
        "src":require("../assets/music/uv_sample.mp3"),
        "duration": "0:32",
        "index":1
    },
    {
        "title":"Dino Sample",
        "src":require("../assets/music/dino_sample.mp3"),
        "duration": "0:36",
        "index":2
    },
    {
        "title":"James is a Sample",
        "src":require("../assets/music/james_is_a_demo.mp3"),
        "duration": "0:25",
        "index":5
    },
    {
        "title":"Richard is a Sample",
        "src":require("../assets/music/richard_is_a_sample.mp3"),
        "duration": "0:34",
        "index":3
    },
    {
        "title":"Stacy's Mom Instrumental",
        "src":require("../assets/music/stacy.mp3"),
        "duration": "1:15",
        "index":3
    }
    
]

export default MusicData;