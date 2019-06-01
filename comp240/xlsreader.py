import csv
import openpyxl
from openpyxl import load_workbook
import pandas as pd

df = pd.read_excel('sarahcontacts.xlsx', header=0) #, sheetname='<your sheet>'
df.to_csv('master_file.csv', index=False, quotechar="'")


# import rows
# data = rows.import_from_xlsx("my_file.xlsx")
# rows.export_to_csv(data, open("my_file.csv", "wb"))



# wb = load_workbook("sarahcontacts.xlsx", read_only=True)
# ws = wb['Book2']
# with open("myfile.csv", "wb") as out:
#     writer = csv.writer(out)
#     for row in ws:
#         values = (cell.value for cell in row)
#         writer.writerow(values)