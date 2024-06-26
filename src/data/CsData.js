const CsData = [
    {
        "title":"Books2Nooks",
        "description":
            [
                "Books2Nooks takes a user inputted book and generates a music playlist. We collected and cleaned 16k books and 400k songs.",
                "Next, all song lyrics and book descriptions were converted to vectors using Sentence Transformers.",
                "Cosine Similarity scores were then computed for all songs and books. Whenever the user selects a book, the top 15 similar songs are returned."
            ],
        "image":require("../assets/cs_thumbs/b2n2.png"),
        "link":"https://terrenceshi.github.io/books2nooks2/",
        "disabled":false
    },
    {
        "title":"KBAI Movie Recs",
        "description":
            [
                "This movie recommender bypasses the cold start problem by using a Knowledge Based algorithm. I collected 24k movies.",
                "The user goes through a tinder inspired app to like and dislike movies. The app gives recs after 15 movies.",
                "The algorithm uses Incremental Concept learning. With the liked movies, the movie makes hypotheses on the types of movies the user likes."
            ],
        "image":require("../assets/cs_thumbs/movierec.png"),
        "link":"https://terrenceshi.github.io/kbai_proj/",
        "disabled":false
    },
    {
        "title":"Authorship Attribution",
        "description":
            [
                "Authorship Attribution is the task of guessing the author of an anonymous article. It is important this technology is not abused.",
                "Our model was to diffrentiate between 260 Taylor Swift and Kanye West songs as well as 200 James Dashner and Rick Riordan excerpts.",
                "Surprisingly, the model had better results with the similar YA authors over the fairly different music artists."
            ],
        "image":require("../assets/cs_thumbs/authorship_comp.jpg"),
        "link":"https://terrenceshi.github.io/books2nooks2/",
        "disabled":true
    },
    {
        "title":"Computer Vision",
        "description":
            [
                "I've made a few image classifiers. One will tell you if the image is day or night. The other will tell you if the image is indoors or outdoors.",
                "Many datasets were combined. I wrote the training code with PyTorch and based my model off of one of google's.",
                "Day / Night worked with 94% accuracy, while Indoor / Outdoor could not break 80% and avoid overfitting."
            ],
        "image":require("../assets/cs_thumbs/cv.png"),
        "link":"https://terrenceshi.github.io/books2nooks2/",
        "disabled":true
    },
    
    
]

export default CsData;