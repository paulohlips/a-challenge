import pandas as pd
import csv

megasena = pd.read_csv('./megasena.csv')

c1 = megasena["c1"].to_list()
c2 = megasena["c2"].to_list()
c3 = megasena["c3"].to_list()
c4 = megasena["c4"].to_list()
c5 = megasena["c5"].to_list()
c6 = megasena["c6"].to_list()

zeroFive =0
five = 0
ten = 0
sixtieth = 0

controlArray = [c1,c2,c3,c4,c5,c6]

for array in controlArray:
    for number in array:
      if (number == "05"):
        print(number)
        zeroFive += 1
      if (number == 5):
        five += 1
      if (number == 10):
        ten += 1
      if (number == 60):
        sixtieth += 1
print('05 apareceu %d vezes\n5 apareceu %d vezes\n10 apareceu %d vezes\n60 apareceu %d vezes' % (zeroFive, five, ten, sixtieth))
          
          



    
    
    



