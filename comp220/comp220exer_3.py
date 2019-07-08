import csv

with open("Census_by_Community_2018.csv", "r") as file:
    csv_file = csv.reader(file, delimiter=',')

    line_count = 0
    for row in csv_file:
        line_count += 1

    print('num lines is ', line_count)

with open("Census_by_Community_2018.csv", "r") as file:

    dictfile = csv.DictReader(file)
    
    line_count = 0
    tot_res_cnt = 0
    class_dict = {}
    sector_dict = {}

    for row in dictfile:
        print('row is ', row['CLASS'])
        if row['CLASS'] not in class_dict:
            class_dict[row['CLASS']] = float(row['RES_CNT'])
        else:
            class_dict[row['CLASS']] += float(row['RES_CNT'])

        if row['SECTOR'] not in sector_dict:
            sector_dict[row['SECTOR']] = float(row['RES_CNT'])
        else:
            sector_dict[row['SECTOR']] += float(row['RES_CNT'])

        line_count += 1
        tot_res_cnt += float(row['RES_CNT'])

    print('class dict is ',class_dict)
    print('sector dict is ',sector_dict)
    print('total residence count is ', tot_res_cnt)

# outputfile = open("output.txt", "a")
# outputfile.write(f"Number of lines is {line_count} and ")
# outputfile.write(f"total residence count is {tot_res_cnt}")
# outputfile.close()



