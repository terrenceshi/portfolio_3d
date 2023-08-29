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
    }
]

export default CsData;