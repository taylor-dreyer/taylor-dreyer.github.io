function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

function showAddNew() {
    document.getElementById('newContent').style.display = 'flex';
    document.getElementById('filterContent').style.display = 'none';
}

function filterArticles() {
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    document.querySelectorAll('#articleList article').forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? '' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? '' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? '' : 'none';
        }
    });
}

function addNewArticle() {
    const title = document.getElementById('inputHeader').value.trim();
    const text  = document.getElementById('inputArticle').value.trim();

    const opinionSelected = document.getElementById('opinionRadio').checked;
    const recipeSelected  = document.getElementById('recipeRadio').checked;
    const lifeSelected    = document.getElementById('lifeRadio').checked;

    if (!title || !text || (!opinionSelected && !recipeSelected && !lifeSelected)) {
        alert('Please fill in the title, select a type, and enter article text.');
        return;
    }

    let typeClass, typeLabel;
    if (opinionSelected)     { typeClass = 'opinion'; typeLabel = 'Opinion'; }
    else if (recipeSelected) { typeClass = 'recipe';  typeLabel = 'Recipe';  }
    else                     { typeClass = 'update';  typeLabel = 'Update';  }

    const article = document.createElement('article');
    article.classList.add(typeClass);

    article.innerHTML = `
        <span class="marker">${typeLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    // Respect the current filter state for the newly added article
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe  = document.getElementById('recipeCheckbox').checked;
    const showUpdate  = document.getElementById('updateCheckbox').checked;

    if (typeClass === 'opinion' && !showOpinion) article.style.display = 'none';
    if (typeClass === 'recipe'  && !showRecipe)  article.style.display = 'none';
    if (typeClass === 'update'  && !showUpdate)  article.style.display = 'none';

    document.getElementById('articleList').appendChild(article);

    // Reset the form fields
    document.getElementById('inputHeader').value      = '';
    document.getElementById('inputArticle').value     = '';
    document.getElementById('opinionRadio').checked   = false;
    document.getElementById('recipeRadio').checked    = false;
    document.getElementById('lifeRadio').checked      = false;
}