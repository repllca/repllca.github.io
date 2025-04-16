#!/bin/bash

# 入力: コミットメッセージが第1引数
MESSAGE=${1:-"update"}

echo "🔍 ステージング中..."
git add .

echo "📝 コミット中..."
git commit -m "$MESSAGE"

echo "🚀 プッシュ中..."
git push

echo "✅ 完了しました！"
