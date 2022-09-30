import pandas as pd


def main():
    df = pd.read_excel('./data/quizz.xlsx')
    df.to_json('./data/mock_questions.json', orient='records')


if __name__ == '__main__':
    main()
