const filipImage = document.getElementById("filip");
filipImage.addEventListener("click", function () {
    const body = document.querySelector(".page-container");
    if (body.style.backgroundColor === "rgb(12, 11, 37)") {
        body.style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "rgb(12, 11, 37)";
    }
});


document.addEventListener('DOMContentLoaded', function () {

    let typedCharacters = '';
    const magicKeyword = 'neo';

    function handleMagicWord(event) {

        typedCharacters += event.key.toLowerCase();

        if (typedCharacters === magicKeyword) {

            const modal = document.getElementById('dennis');
            modal.style.display = 'block';

            typedCharacters = '';
        } else if (!magicKeyword.startsWith(typedCharacters)) {

            typedCharacters = '';
        }
    }


    document.addEventListener('keydown', handleMagicWord);

    const modal = document.getElementById('dennis');
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const modalCloseBtn = document.querySelector('.modal-close');
    modalCloseBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});




