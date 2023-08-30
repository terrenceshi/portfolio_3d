const CsData = [
    {
        "title":"Books2Nooks",
        "description":
            [
                "Books2Nooks takes a user inputted book and generates a music playlist. We collected and cleaned 16k books and 400k songs from various datasets.",
                "Next, all song lyrics and book descriptions were converted to vectors using Sentence Transformers.",
                "Cosine Similarity scores were then computed for all songs and books. Whenever the user selects a book, the top 15 similar songs are returned."
            ],
        "image":require("../assets/cs_thumbs/b2n2.png"),
        "link":"books2nooks.ml",
        "disabled":true
    },
    {
        "title":"Authorship Attribution",
        "description":
            [
                "Authorship Attribution is the task of guessing the author of an anonymous article.",
                "In order to be robust, our Recurrent Neural Network was to diffrentiate between 260 Taylor Swift and Kanye West songs as well as 200 James Dashner and Rick Riordan excerpts.",
                "Surprisingly, the model had better results with the similar YA authors over the different music artists."
            ],
        "image":require("../assets/cs_thumbs/authorship_comp.jpg"),
        "link":"books2nooks.ml",
        "disabled":true
    },
    {
        "title":"Computer Vision",
        "description":
            [
                "I've made a few image classifiers. One will tell you whether the image was taken during the day or night. The other will tell you if the image is indoors or outdoors.",
                "Numerous datasets were combined along with various outliers from google images. I wrote the training code with PyTorch and based my model off of one of google's.",
                "Day / Night worked with 90%+ accuracy, while Indoor / Outdoor could not break 80% and avoid overfitting."
            ],
        "image":require("../assets/cs_thumbs/cv.png"),
        "link":"books2nooks.ml",
        "disabled":true
    }
]

export default CsData;