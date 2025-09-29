# aws-developer
AWS 잘하는 개발자 되기
- [AWS 잘하는 개발자 되기](https://goldenrabbit.co.kr/product/aws-%ec%9e%98%ed%95%98%eb%8a%94-%eb%b0%b1%ec%97%94%eb%93%9c-%ea%b0%9c%eb%b0%9c%ec%9e%90-%eb%90%98%ea%b8%b0/)

## 0.3.1 맥OS에서 클라우드포메이션 템플릿 관리하기 린터 설치 명령어 추가

> **수정일:** 2025-09-29  
> **페이지:** 34페이지

책 34쪽에서는 맥OS 기본 파이썬 환경을 기준으로 설명하고 있습니다.
그러나, 맥OS에 기본 제공되는 파이썬은 버전 관리나 개발 환경 분리가 어렵기 때문에,
실제 개발 환경에서는 별도의 파이썬 설치를 권장합니다.

특히, 맥OS에서는 Homebrew라는 패키지 관리 도구를 이용하면 파이썬을 비롯한 다양한 개발 도구를 간단하게 설치하고 관리할 수 있습니다.
따라서 Homebrew로 파이썬을 설치하는 방법으로 명령어를 추가하였습니다.

### 책에 기재된 기존 방식

책에서는 맥OS 기본 파이썬 환경을 기준으로 아래와 같이 진행하도록 안내하고 있습니다.
맥OS에는 기본적으로 파이썬이 설치되어 있기 때문에 별도의 파이썬 설치와 pip 설치가 반드시 필요한 것은 아닙니다.
기본 파이썬 환경을 그대로 사용하셔도 무방하지만, 버전 관리와 안정성을 위해 Homebrew 기반의 별도 설치를 고려하시는 것을 권장드립니다.

```bash
# ➊ 로컬 환경에 파이썬 설치 확인
python3 –version
# ➋ 파이썬 패키지인 pip를 최신 버전으로 업그레이드
python3 -m pip install --upgrade pip
# ➌ pip를 이용하여 클라우드포메이션 린터 설치
pip install cfn-lint
# ➍ 클라우드포메이션 린터 버전 확인
cfn-lint --version
```

### Homebrew를 이용한 설치 과정

```bash
# Homebrew가 설치되어 있는지 확인합니다.
brew -v

# Homebrew가 설치되어 있지 않다면 설치합니다.
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 파이썬을 설치합니다.
brew install python

# 파이썬 설치를 확인합니다.
python3 --version

# 파이썬 패키지인 pip를 최신 버전으로 업그레이드합니다.
python3 -m pip install --upgrade pip

# pip를 이용하여 클라우드포메이션 린터를 설치합니다.
pip3 install cfn-lint

# 클라우드포메이션 린터 버전을 확인합니다.
cfn-lint --version
```

## 책 정보
<!-- 必須事項 -->
안녕하세요 저자 김재욱입니다. 이 책을 읽어주신 여러분들 감사합니다.

이 책에서는 인프라 설계부터 구축까지, 기초부터 실무에서 활용되는 내용까지 폭넓게 다루고 있습니다.
실습을 진행하시면서 모르는 부분이나 코드에 대해 궁금한 점이 있다면, 언제든지 자유롭게 질문해 주세요.

## 출판사 정보
<!-- 必須事項 -->
- [골든래빗](https://goldenrabbit.co.kr/)
- [골든래빗 IT 개발 서적](https://goldenrabbit.co.kr/product-category/books/it/)