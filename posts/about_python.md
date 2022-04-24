---
title: "Python3の書き方など"
date: "2021-10-27"
---

### 開発（Flask や Django など）

#### try-except のエラー内容表示

```python
try:
  something_try_process()
except:
  import traceback
  traceback.print_exc()
  something_except_process()
```

### ライブラリ

#### 数値計算の高速化

- numpy
  - RaspberryPi
    ```bash
    $ sudo apt-get install python3-numpy
    ```
  - MacOS
    ```bash
    $ pip3 install numpy
    ```
  ##### 使い方
  - [4 分位数の計算](https://www.monotalk.xyz/blog/Calculate-the-interquartile-range-with-python/)

#### 画像編集

- Pillow

  ##### 使い方

  - [Pillow のインストールから使い方まで](https://note.nkmk.me/python-pillow-basic/)

#### 画像認識

- tesseract-OCR

  ##### 使い方

  - [Mac で使ってみた](https://jprogramer.com/ocr/2003)
  - [Python で使う](http://73spica.tech/blog/tesseract_for_python/)
  - [画像から日本語文字データの抽出](https://qiita.com/mczkzk/items/393abc70836b9bde2f60)

### プログラミングコンテスト

#### 代入

- 入力例

  A B C

- 条件

  0 <= A,B,C <= 10000

- 入力値

  100 200 300

```python
#a,b,cにint型で100,200,300を代入する
a,b,c = map(int,input().split())
```

#### １次元配列の初期化

```python
list01 = []
list02 = [0] * 3

print(list01)
print(list02)

"""出力結果
[]
[0,0,0]
"""
```

#### 2 次元配列の初期化

```python
name_list = [[0 for i in range(2)] for j in range(3)]
print(name_list)

"""出力結果
[[0,0],[0,0],[0,0]]
"""
```

#### 配列の長さ

```python
list01 = [1,2,3,4]
print(len(list01))

"""出力結果
4
"""
```

#### 配列の型変換

- int --> str

```python
list = [1,2,3,4]
list = [str(s) for s in list]
print(list)

"""出力結果
['1','2','3','4']
"""
```

- str --> int

```python
list = ['5','6','7','8','9']
list = [int(s) for s in list]
print(list)

"""出力結果
[5,6,7,8,9]
"""
```

#### 出力フォーマット

```python
Max = 10
Min = 4
Ave = 7

print("format: Max:{}, Min:{}, Ave:{}".format(Max, Min, Ave))
print(f"f-string: Max:{Max}, Min:{Min}, Ave:{Ave}")

"""出力結果
format: Max:10, Min:4, Ave:7
f-string: Max:10, Min:4, Ave:7
"""
```

#### 末尾の改行なしで出力

- 例 1

  ```python
  print('This',end=' ')
  print('is',end=' ')
  print('the',end=' ')
  print('test.')

  """出力結果
  This is the test.
  """
  ```

- 例 2

  ```python
  title = 'inside out'
  evalution = '100'
  print('title:',title,end=', ')
  print('evalution:',evalution)

  """出力結果
  title: inside out, evalution: 100
  """
  ```

#### 複数の変数を出力

- 例１

  ```python
  print('CALPIS',100,'th','anniversary')

  """出力結果
  CALPIS 100 th anniversary
  """
  ```

- 例２

  ```python
  print('CALPIS',100,'th','Anniversary',sep='\n')

  """出力結果
  CALPIS
  100
  th
  Anniversary
  """
  ```

### 正規表現

[書きながら覚えよう！Python で正規表現を使う方法【初心者向け】](https://techacademy.jp/magazine/15635#:~:text=Python%E3%81%AE%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE%E3%81%A8,%E8%A1%8C%E3%81%86%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82)

### pandas

#### ソート

https://note.nkmk.me/python-pandas-sort-values-sort-index/

#### 順位付け

https://note.nkmk.me/python-pandas-rank/

#### ユニークな要素の個数・頻度のカウント

https://note.nkmk.me/python-pandas-value-counts/

#### GroupBy でグルーピングし統計量を算出

https://note.nkmk.me/python-pandas-groupby-statistics/

#### DataFrame の連結

https://note.nkmk.me/python-pandas-concat/

#### agg（）でデータを集計

https://pycarnival.com/agg_pandas/
