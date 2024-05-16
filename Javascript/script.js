function validateForm() {
    // 名前の入力値を取得
    let name = document.getElementById("name").value;
    // メールアドレスの入力値を取得
    let email = document.getElementById("email").value;
    // お問い合わせ内容の入力値を取得
    let message = document.getElementById("message").value;

    // 名前が入力されているか確認
    if (name === "") {
        alert("名前を入力してください");
        return false;
    }
    // メールアドレスの正規表現パターン
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // メールアドレスが正規化されているか確認
    if (!emailPattern.test(email)) {
        alert("正しいメールアドレスを入力してください");
        return false;
    }
    // お問い合わせ内容が入力されているか確認
    if (message === "") {
        alert("お問い合わせ内容を入力してください");
        return false;
    }
    return true;
}


    function loadComments() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    displayComments(xhr.responseText);
                } else {
                    alert('コメントの読み込み中にエラーが発生しました。');
                }
            }
        };
        xhr.open('GET', 'get_comments.php', true);
        xhr.send();
    }

    function displayComments(response) {
        var comments = JSON.parse(response);
        var table = "<table><tr><th>名前</th><th>メールアドレス</th><th>コメント</th></tr>";
        for (var i = 0; i < comments.length; i++) {
            table += "<tr><td>" + comments[i].name + "</td><td>" + comments[i].email + "</td><td>" + comments[i].message + "</td></tr>";
        }
        table += "</table>";
        document.getElementById("comment-table").innerHTML = table;
    }