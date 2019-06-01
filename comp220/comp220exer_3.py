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

    for row in dictfile:
        tot_res_cnt += float(row['RES_CNT'])
        line_count += 1

    print('total residence count is ', tot_res_cnt)

outputfile = open("output.txt", "a")
outputfile.write(f"Number of lines is {line_count} and ")
outputfile.write(f"total residence count is {tot_res_cnt}")
outputfile.close()



