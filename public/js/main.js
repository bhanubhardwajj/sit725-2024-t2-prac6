document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    
    // Initialize Textarea
    var textNeedCount = document.querySelectorAll('textarea');
    M.CharacterCounter.init(textNeedCount);
});
