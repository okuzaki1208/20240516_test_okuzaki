20240411提出のgitテストリポジトリです。<br>
<br>
2024/04/12 変更内容  
index.phpにsubmit_contact.phpの処理を組み込みました。<br>  
よって、submit_contact.phpは削除しました。<br>

<br>
<h1>20240516提出のJSON・AJAXテスト</h1>
20240412マージをベースに改修しました。<br>
<br>
<h2>変更点</h2><br>
・ページ読み込み時にコメントを取得していた処理を、取得ボタン押下時に変更しました。<br>
・get_comments.phpの追加。<br>
・index.php、script.js、style.cssの修正<br>
・DB名を変更、sqlファイルの新規追加。<br>
<br>

<h2>今後の課題</h2>
コメント投稿時にリロードされるため、最新の情報をボタンによって取得できているか分かりづらい。<br>
今後、リロードなしで投稿できるなどの機能を盛り込んでいく予定。<br>
<br>

<h2>レビュー時の注意点</h2><br>
・json_test_okuzaki.sqlをご自身のDBへインポートしてください。<br>
