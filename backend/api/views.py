from asyncio.windows_events import NULL
from copyreg import constructor
from django.http import HttpResponse
from django.shortcuts import render
from .serializers import CommandSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from rest_framework.parsers import JSONParser

# Create your views here.


class VoiceTestView(APIView):
    
    def post(self,request, format= None):
        #print(type(request)) 

        serializer = CommandSerializer(data=request.data)  

        if serializer.is_valid():
            data = serializer.data

            if data["stpchecked"] == True:
                command1 = f"ADD SCCPGT:GTNM=\"IR_NSINT_{data['NGT']}\",NI=IM,RT=STP1,WM=MTWM,AT=NORMAL,SCCPRPLNM=\"IR_SPG_{data['SCCPRPLMN']}\",GT=GT4, TT=0, CP=ISDN, AI=INTER, AF=\"{data['NGT']}\";\n"
                command2 = f"ADD SCCPGT:GTNM=\"IR_NSMGT_{data['NGT']}\",NI=IM,RT=STP1,WM=MTWM,AT=NORMAL,SCCPRPLNM=\"IR_SPG_{data['SCCPRPLMN']}\",GT=GT4, TT=0, CP=ISDNMOV, AI=INTER, AF=\"{data['NGT']}\";\n"
                command3 = f"ADD RRCDGT: RRCDGTNM=\"IR_NSSRI_{data['NGT']}\", RR=500, GT=GT4, CP=ISDN, AI=INTER, ADDR=\"{data['NGT']}\",TTYPE=ROC, NRR=\"{data['NRR']}\";"

                voiceTestData = [command1, command2, command3]
                
                return Response(voiceTestData,status=status.HTTP_200_OK)
            return Response({"status":"stpnotchecked"},status=status.HTTP_200_OK)
        errorMessage=serializer.errors
        return Response({
                'status': 'Bad request',
                'message': errorMessage,
            }, status=status.HTTP_400_BAD_REQUEST)
