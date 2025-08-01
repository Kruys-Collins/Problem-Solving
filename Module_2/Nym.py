import csv 
with_open('web3_token_transfers.csv', 'r') as file:
    reader = csv.reader(file)

    data = list(reader)
df = pd.DataFrame(data)

print(df)