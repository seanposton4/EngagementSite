import numpy as np
import pandas as pd

df = pd.read_csv('addr.csv')

if df.duplicated().any():
  print('Duplicate Rows: ')
  print(df[df.duplicated()])
else:
  print('No dupldies :)')

